export const name="clock_arrow_down-fill";
export const id="dl_4d2cb0764773fcd1cbe2";
export const url=new URL("../icons/clock_arrow_down-fill.svg?v=e17c1c1c33a07d4b2a2e26f4ed3326f1ffca0a6a9725be2e2894e9c8375f3a05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
