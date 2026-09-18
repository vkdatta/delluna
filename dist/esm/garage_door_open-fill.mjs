export const name="garage_door_open-fill";
export const id="dl_1eeb20a95aa8499a8995";
export const url=new URL("../icons/garage_door_open-fill.svg?v=35c46a82c22bf479677809180e8be6f39f8eae939a7e0e729c5b4b52224e9f7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
