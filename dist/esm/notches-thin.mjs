export const name="notches-thin";
export const id="dl_0656c94e888145eb8684";
export const url=new URL("../icons/notches-thin.svg?v=613a365554bcdee1942362c4ce1b2e486b6d75b64fa38219f14fe8e8d8cc6268",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
