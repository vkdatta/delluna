export const name="plant";
export const id="dl_dbf69a59ee004f0e859a";
export const url=new URL("../icons/plant.svg?v=e0c70db4f79e67821f9ccd2f4d07a65f602d399dc08ada3f7170753224e95e44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
