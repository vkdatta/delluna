export const name="battery-vertical-empty-bold";
export const id="dl_ea78f4180c7b4ed781d1";
export const url=new URL("../icons/battery-vertical-empty-bold.svg?v=602d5a97f33e496977ec404aad517cfe50182039d064edc4ddcfe8af3f492791",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
