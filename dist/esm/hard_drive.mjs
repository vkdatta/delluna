export const name="hard_drive";
export const id="dl_12387c04e4f5aa4f2d10";
export const url=new URL("../icons/hard_drive.svg?v=609e5b68a67fe48d9c94a9b572ee4d633161db92c2a97f54040d1550259d18a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
