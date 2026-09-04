export const name="google-chrome-logo";
export const id="dl_ad8120c7602f4c8b9abb";
export const url=new URL("../../icons/G/google-chrome-logo.svg?v=60bb2e8405bfe3c6a815f0cf867c46760baf8e5d43b22807ce245d568166de24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
