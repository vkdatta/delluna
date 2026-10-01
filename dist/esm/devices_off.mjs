export const name="devices_off";
export const id="dl_a3ff8ce5f510bd44172f";
export const url=new URL("../icons/devices_off.svg?v=78e3356aeb9314b9b792c0e38983c4f70d3036b7611329e93d7038e1fbfdc47c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
