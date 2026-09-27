export const name="text-superscript-bold";
export const id="dl_afc990981c3f9dfac483";
export const url=new URL("../icons/text-superscript-bold.svg?v=7fd4c0335f12e1bf6d084e0ac8fced2d117d1bf87482a30557abab8f18b4d52b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
