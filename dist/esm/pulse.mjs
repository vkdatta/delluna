export const name="pulse";
export const id="dl_0b7b1a73c5c445d58214";
export const url=new URL("../icons/pulse.svg?v=075c682480f00409739bf611e4b2041e271fe276a48d0e02a65e04ff396f5ad2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
