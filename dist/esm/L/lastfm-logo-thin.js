export const name="lastfm-logo-thin";
export const id="dl_9173c3eccf7f4d96b55e";
export const url=new URL("../../icons/L/lastfm-logo-thin.svg?v=1ac32db0bd340a3d776775d646a9a68f886eec5f8ab3442b23d5dddc4a33628d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
