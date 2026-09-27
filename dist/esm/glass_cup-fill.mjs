export const name="glass_cup-fill";
export const id="dl_4756a23e9ad44087bf59";
export const url=new URL("../icons/glass_cup-fill.svg?v=62c8b47468b15a28dbf0b9f75e44eb05289e0c7eea87908692d388011441bead",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
