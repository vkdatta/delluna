export const name="shield_toggle";
export const id="dl_3672e46306ea944926c6";
export const url=new URL("../icons/shield_toggle.svg?v=bee38427d1cb0f40154cada2e146e1e5b94c91a9c9791b1ebd0d073ba7e73dd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
