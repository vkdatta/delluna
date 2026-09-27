export const name="fitness_center-fill";
export const id="dl_91f6064dbb59514cf125";
export const url=new URL("../icons/fitness_center-fill.svg?v=0b6b060a1dd9b878db03c87ccec65bf51140c36df1c5e6fd699093c094e4129e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
