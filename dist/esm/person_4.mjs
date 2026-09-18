export const name="person_4";
export const id="dl_255cc4b834934a6ca82d";
export const url=new URL("../icons/person_4.svg?v=532246b9da8bd41219580a3913ae4aed3cb0809bff9e0ed686b48ad9ae1355ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
