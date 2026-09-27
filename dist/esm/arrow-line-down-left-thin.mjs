export const name="arrow-line-down-left-thin";
export const id="dl_020f0ff7b26f4d2bb4f2";
export const url=new URL("../icons/arrow-line-down-left-thin.svg?v=2953ccdfb4f7c0d05a09685b2a10ae147acb3616f9ee99d89ee21ff33ef55d6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
