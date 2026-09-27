export const name="lucid_3-shield-cog";
export const id="dl_650b3be775be45ed86f8";
export const url=new URL("../icons/lucid_3-shield-cog.svg?v=7f500c7c6a5bb52742ecc412cd7a5118e98d4f01540e3f044f5f22173bfbe0a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
