export const name="gear";
export const id="dl_2a0043b2536d44d9af1d";
export const url=new URL("../icons/gear.svg?v=78a4085ffb3442f6b8bcf141837cab35f25399fe3f0d38814411c3a25dc96b0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
