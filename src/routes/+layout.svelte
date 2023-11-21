<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';

	let mobileMenu: HTMLElement | null;
	let hamburgerBtn: HTMLElement | null;

	const toggleMenu = () => {
		if (mobileMenu && hamburgerBtn) {
			mobileMenu.classList.toggle('hidden');
			mobileMenu.classList.toggle('flex');
			hamburgerBtn.classList.toggle('toggle-btn');
		}
	};

	onMount(() => {
		hamburgerBtn = document.getElementById('hamburger-button');
		mobileMenu = document.getElementById('mobile-menu');

		if (hamburgerBtn) {
			hamburgerBtn.addEventListener('click', toggleMenu);
		}

		if (mobileMenu) {
			mobileMenu.addEventListener('click', toggleMenu);
		}
	});
</script>

<svelte:head>
	<title>Acme Rockets</title>
</svelte:head>

<slot />
