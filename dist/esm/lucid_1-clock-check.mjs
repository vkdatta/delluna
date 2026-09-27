export const name="lucid_1-clock-check";
export const id="dl_c660bff51f984bfeb766";
export const url=new URL("../icons/lucid_1-clock-check.svg?v=7d6307cb1c81a280cf79fbb02f42f8a22e76afc5841d2020ca4fcb9784be33e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
