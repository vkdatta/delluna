export const name="link-break-thin";
export const id="dl_820f4f15917d4413a4ab";
export const url=new URL("../icons/link-break-thin.svg?v=30beaaac4407e6b7189cfc535ee4713e219088e60da70cf772857b20917282c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
