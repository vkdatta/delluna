export const name="trash-simple";
export const id="dl_a5013de3b72b8d6e1246";
export const url=new URL("../icons/trash-simple.svg?v=c6e8b5e26f62da3a1b7e995fd602f74c33c791d2abd2a2b64c65ec22cd32b051",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
