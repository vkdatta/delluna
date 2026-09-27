export const name="push-pin-slash-light";
export const id="dl_52e6c12c5a1946a4904d";
export const url=new URL("../icons/push-pin-slash-light.svg?v=efd98900d83051cc589f37bf9b4982b3adf50aa14ab3b86cb47daaa47ca56707",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
