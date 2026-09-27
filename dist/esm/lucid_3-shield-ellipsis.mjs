export const name="lucid_3-shield-ellipsis";
export const id="dl_d231de1c72144b558a44";
export const url=new URL("../icons/lucid_3-shield-ellipsis.svg?v=9e6fbc433b68ee689ca5b9a10215c544dd864a31daf18d3b203c202c2a8399a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
