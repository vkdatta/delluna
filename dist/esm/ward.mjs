export const name="ward";
export const id="dl_a29929fbf3d4b586d70b";
export const url=new URL("../icons/ward.svg?v=cf0e38aba5ded7b992ab3057fbbd9c0630c83469b69ab903a241622089a56dc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
