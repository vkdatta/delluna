export const name="prescription-thin";
export const id="dl_29a8e0dbf6584a259069";
export const url=new URL("../icons/prescription-thin.svg?v=f004f08e24ca528bebcbf6e814ce360eb6146fdb374e89ef931bc19dc3a8e8c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
