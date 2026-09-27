export const name="sync_saved_locally_off";
export const id="dl_1d7fd9ad0c995b35ef5c";
export const url=new URL("../icons/sync_saved_locally_off.svg?v=ac1e6563d21418680b3ed6e3de46520bd8018b83cf52fc9898c0b8e98d407207",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
