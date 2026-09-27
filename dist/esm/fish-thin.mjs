export const name="fish-thin";
export const id="dl_8fd490b1ed6248679ee1";
export const url=new URL("../icons/fish-thin.svg?v=40c8c06b0a0a16bbb8de4b5c0fb85a3b791b0b35ca077131ba25cee8338f1c99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
