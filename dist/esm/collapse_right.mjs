export const name="collapse_right";
export const id="dl_50b67485344a6e231bca";
export const url=new URL("../icons/collapse_right.svg?v=21f8cdb803976f54da47db26d76b08523def8a41a57f9ce4288f89e4b94106e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
