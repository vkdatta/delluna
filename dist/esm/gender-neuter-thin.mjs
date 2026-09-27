export const name="gender-neuter-thin";
export const id="dl_daba0c75a5ee49f7abcf";
export const url=new URL("../icons/gender-neuter-thin.svg?v=8e4277e489632b03615c4c1f71f79b5ef48681c9f8c0fa13e7a46b8f4f167395",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
