export const name="pi";
export const id="dl_a1104b5f8f7d4ed096c8";
export const url=new URL("../../icons/updated-separated-svg-files/pi.svg?v=3956d4d2e3bfc1f54db35d70bee883defac75e4a49a0d5e3203b6686edfabc14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
