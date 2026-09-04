export const name="google-podcasts-logo";
export const id="dl_cf92f7b2354e4ed682f3";
export const url=new URL("../../icons/G/google-podcasts-logo.svg?v=3ceb9c23adc0ee6031b2a64add771946b138f88c8da697cf3b814a82e7af5e57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
