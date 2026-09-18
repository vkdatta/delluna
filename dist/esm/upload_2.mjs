export const name="upload_2";
export const id="dl_58ebaeabc07d4663a442";
export const url=new URL("../icons/U/upload_2.svg?v=99234213899ab2aea01422d8ea5add86d2222f31752a12848add44ea90f16d83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
