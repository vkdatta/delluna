export const name="assistant_direction";
export const id="dl_3a4b187c9db441ee661d";
export const url=new URL("../icons/assistant_direction.svg?v=a18f2f5c4b0988a1d8afd9b2d11211702700834e82aa491ee0e2dddfe37c3453",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
