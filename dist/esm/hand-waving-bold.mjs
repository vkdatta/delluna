export const name="hand-waving-bold";
export const id="dl_679564edfabd42b69c6d";
export const url=new URL("../icons/hand-waving-bold.svg?v=94e555f2570b8823f41f1c314d6cd090f7b6935c33d52ecb62973dc3326ffc0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
