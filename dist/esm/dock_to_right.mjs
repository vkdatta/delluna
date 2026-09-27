export const name="dock_to_right";
export const id="dl_d6aa0d8b7a5bbede42fa";
export const url=new URL("../icons/dock_to_right.svg?v=90aef6b3db5b6cce65af25266ab2c2f224bf3c3c0974ff9399ec5acbfec0ae22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
