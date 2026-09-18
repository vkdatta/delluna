export const name="flashlight_off";
export const id="dl_8e88bc6d6439481fa142";
export const url=new URL("../icons/flashlight_off.svg?v=592b519804588d08bd2bed578c48c0d8ab9e5c5d83cc598a553f4f42e0994813",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
