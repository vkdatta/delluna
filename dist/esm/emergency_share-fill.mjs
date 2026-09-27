export const name="emergency_share-fill";
export const id="dl_4ba5ed35e0dcc65e0e5b";
export const url=new URL("../icons/emergency_share-fill.svg?v=0549ce251f38eeecb9eaff2796dbb3a7046f4446f37e797a4e5f3afc0689af11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
