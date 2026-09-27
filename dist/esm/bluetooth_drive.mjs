export const name="bluetooth_drive";
export const id="dl_7e21797c354f1662753b";
export const url=new URL("../icons/bluetooth_drive.svg?v=b3e7487e3d5cdb840aea932027228a33d2382061608b91b7d8e319c58cb63c40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
