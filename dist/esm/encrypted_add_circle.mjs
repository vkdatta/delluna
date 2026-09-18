export const name="encrypted_add_circle";
export const id="dl_981e68c4f78742d0a1f7";
export const url=new URL("../icons/encrypted_add_circle.svg?v=c06d851091df8250af41a0cb629d1d221905ebbc489f994500d5891d5adedc53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
