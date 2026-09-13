export const name="18_up_rating";
export const id="dl_0344d5fecfd74aa9a487";
export const url=new URL("../icons/1/18_up_rating.svg?v=59ef888ab5bfcb195d1630e98f4acd6b88d304fb0deb58c35cb1a55672e5f7e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
