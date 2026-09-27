export const name="bell-ringing-light";
export const id="dl_83c55328fa2248a7892d";
export const url=new URL("../icons/bell-ringing-light.svg?v=3a55ee111e4ab85be5c2a5918eb4d70b2ae1b53f6e77ec70007e260fe3d240ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
