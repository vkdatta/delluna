export const name="no_sound";
export const id="dl_d1174f0818f3d50ad1b0";
export const url=new URL("../icons/no_sound.svg?v=c30b805a65f3cecbf19f20b7f59eef856b8d05235cdaa4a4ee02a69402b46cc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
