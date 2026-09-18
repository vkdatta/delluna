export const name="pause_circle";
export const id="dl_047604580779433586bc";
export const url=new URL("../icons/pause_circle.svg?v=bf78a4bb821ea6367396e4d2ec2423fb36e9ad5b3fc5e3a21b4d8980c57b1365",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
