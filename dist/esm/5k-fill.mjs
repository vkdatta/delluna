export const name="5k-fill";
export const id="dl_496a4098ca2448eb9ab2";
export const url=new URL("../icons/5/5k-fill.svg?v=521d895e8cc78bcbb08792ce2713341acef04f4e104bd7332fb71d860bb4a77a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
