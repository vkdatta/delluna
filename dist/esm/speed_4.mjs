export const name="speed_4";
export const id="dl_e501867405faebf7c02f";
export const url=new URL("../icons/speed_4.svg?v=2361a6fabd2e9d8a5885ff0d7d024aaf5b90ff5927d163f05c00c45ea0f357f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
