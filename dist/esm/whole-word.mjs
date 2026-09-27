export const name="whole-word";
export const id="dl_a400e9d373b64fb2988f";
export const url=new URL("../icons/whole-word.svg?v=57ff66686334bb6206b062283818403d9e0ca8e3f0fbd6137955c00cf90096bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
