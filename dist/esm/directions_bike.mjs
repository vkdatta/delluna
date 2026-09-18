export const name="directions_bike";
export const id="dl_c4da42074fea4fcbaaf6";
export const url=new URL("../icons/directions_bike.svg?v=cc14d2da2f3cfb07719cd0261036a2f1fcdec006860a174725cfa4fe51a62b1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
