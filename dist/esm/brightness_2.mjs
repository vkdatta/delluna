export const name="brightness_2";
export const id="dl_98cba99acc51b8e61da4";
export const url=new URL("../icons/brightness_2.svg?v=16a778fa8d0f501f740ef794f9d0c5488389bc70d756ce36829c50aca499379b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
