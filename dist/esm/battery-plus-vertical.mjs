export const name="battery-plus-vertical";
export const id="dl_0420e202a310470cb765";
export const url=new URL("../icons/battery-plus-vertical.svg?v=599bc88c926561888e826a7ab3c3d3127eb90780dd69d195a49ea893afdbc6d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
