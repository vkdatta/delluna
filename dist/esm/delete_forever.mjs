export const name="delete_forever";
export const id="dl_5d4fbab145b99212c01c";
export const url=new URL("../icons/delete_forever.svg?v=2df4878a5c4a33d4b906a65cccbcc04039ac5e50290e3c693881b36bad4bf3f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
