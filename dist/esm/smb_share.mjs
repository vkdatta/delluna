export const name="smb_share";
export const id="dl_7581bb8cf9cb70415a02";
export const url=new URL("../icons/smb_share.svg?v=c4bc4cf039549cb70499d87cf24f76bf960269287c657d01813942a7b14c52ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
