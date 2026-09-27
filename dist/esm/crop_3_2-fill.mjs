export const name="crop_3_2-fill";
export const id="dl_e5f9bd43639fa233ebb5";
export const url=new URL("../icons/crop_3_2-fill.svg?v=dcb7056b424baccd725ecbbb00675ebc6ff6704c18d73aba9dade2aa177ce3b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
