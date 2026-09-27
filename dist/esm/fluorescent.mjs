export const name="fluorescent";
export const id="dl_bf5d6383173d519223a4";
export const url=new URL("../icons/fluorescent.svg?v=317a2195a2d6a97055c0566152a484ce4231a8dcc519be0d7bba7597bc9f5250",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
