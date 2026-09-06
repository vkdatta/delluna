export const name="battery-vertical-low-duotone";
export const id="dl_af131da63a0a44c2b0e4";
export const url=new URL("../icons/battery-vertical-low-duotone.svg?v=d682e6be5a18a51549fc2187b447cb0db86da4d35f67760e540ef0d0354cb521",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
