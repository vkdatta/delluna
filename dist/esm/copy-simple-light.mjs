export const name="copy-simple-light";
export const id="dl_295fd1d7b4ec48b186f6";
export const url=new URL("../icons/copy-simple-light.svg?v=68b75003e324e56895bd3094f20d8f78bcbeceb82a689d7959df81325bfdbd6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
