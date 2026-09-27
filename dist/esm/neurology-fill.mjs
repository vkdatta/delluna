export const name="neurology-fill";
export const id="dl_a0b6d0797875477074a3";
export const url=new URL("../icons/neurology-fill.svg?v=8793d5d56fe7799623b508c8a70ad1acf0ca354fb30e831a982befb73b23c106",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
