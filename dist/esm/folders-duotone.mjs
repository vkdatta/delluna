export const name="folders-duotone";
export const id="dl_339f0835ee954ac1a055";
export const url=new URL("../icons/folders-duotone.svg?v=c0c4eaa48812ec982dd4e07b63b7a5879b9f3c424c04a70ca987c8aeb170c759",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
