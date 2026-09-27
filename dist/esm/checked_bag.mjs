export const name="checked_bag";
export const id="dl_375c547e1a3e553a072e";
export const url=new URL("../icons/checked_bag.svg?v=0e41e582e88624e87e812e5c14588f35e01d5750c74ef84843b8e98fa177f6d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
