export const name="vacuum_2_on-fill";
export const id="dl_47af84ff737fb66b393a";
export const url=new URL("../icons/vacuum_2_on-fill.svg?v=abf8798887852d1ab92fc240e1b37e52356dcd4efd07c0dc208d29259a3d3082",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
