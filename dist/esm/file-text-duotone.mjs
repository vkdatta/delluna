export const name="file-text-duotone";
export const id="dl_f0fb5e5fb0ea4e1abc91";
export const url=new URL("../icons/file-text-duotone.svg?v=6b0867a397af11f3c0a66091a4e17e3c172a42f48812ba99fc8157d9093cb7ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
