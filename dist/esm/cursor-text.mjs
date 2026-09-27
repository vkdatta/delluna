export const name="cursor-text";
export const id="dl_0a0ff3aee1c247349040";
export const url=new URL("../icons/cursor-text.svg?v=639f4a736968a9a7167ffc1b85cae2e96f365a1977547272fbec9e6e38db097a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
