export const name="lucid_2-heart-crack";
export const id="dl_89dd663eccc44f4c8fd0";
export const url=new URL("../icons/lucid_2-heart-crack.svg?v=f311aaf96e45e65a72276064e7af0494e4b85f9e715bf6f209e31d05060b1247",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
