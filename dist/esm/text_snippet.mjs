export const name="text_snippet";
export const id="dl_dc524d41358d28c4a1e2";
export const url=new URL("../icons/text_snippet.svg?v=77a765ef264f3e7ecec6b5d0a4174c7b118a7964cccaa5f679150092af9a3a86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
