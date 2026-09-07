export const name="battery-warning-vertical-bold";
export const id="dl_eb7f708b91174a81b84b";
export const url=new URL("../icons/battery-warning-vertical-bold.svg?v=071f3918675756b459aad56a7208a66cf5c5dbaabe0c177a02a3a64d8c26bc5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
