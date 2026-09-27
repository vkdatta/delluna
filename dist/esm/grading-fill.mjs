export const name="grading-fill";
export const id="dl_49dec4348dfbc43ce254";
export const url=new URL("../icons/grading-fill.svg?v=c71087d18bd2cd7d3526437b3c1c6b106dc4b180a4936beabd184178d834c67d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
