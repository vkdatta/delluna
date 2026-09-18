export const name="face_4";
export const id="dl_70b86108e1d4458b9273";
export const url=new URL("../icons/face_4.svg?v=45fbc5ca054bb591a988261d6e32de869e9fc4115b268d416776404908aa222b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
