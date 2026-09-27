export const name="shutter_speed";
export const id="dl_6eb01962f86030bb7510";
export const url=new URL("../icons/shutter_speed.svg?v=0b9781a145d91006834397c81149a3a7d07101c4e47c219ca348575e0f526a9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
