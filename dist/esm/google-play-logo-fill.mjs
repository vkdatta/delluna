export const name="google-play-logo-fill";
export const id="dl_b488bca29f3b4d64b360";
export const url=new URL("../icons/google-play-logo-fill.svg?v=9e97931b9d2eebba9d564fd935ecf1b89775746b06b22874253bcff3cd07bccd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
