export const name="office-chair-fill";
export const id="dl_6837912b2c0c484aa437";
export const url=new URL("../icons/office-chair-fill.svg?v=c5c5c2a0000f0169843ee3d27cfbdcc81fb42a553498df2863202ceeeac5a5a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
