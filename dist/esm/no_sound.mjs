export const name="no_sound";
export const id="dl_67ac6c4e18b543a39e8b";
export const url=new URL("../icons/N/no_sound.svg?v=c30b805a65f3cecbf19f20b7f59eef856b8d05235cdaa4a4ee02a69402b46cc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
