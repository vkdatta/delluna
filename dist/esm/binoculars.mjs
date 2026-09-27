export const name="binoculars";
export const id="dl_3d8a79c796d04f73a43d";
export const url=new URL("../icons/binoculars.svg?v=828f0b146871f126886953b7facf3213ab560d38074678801c04de841d577d6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
