export const name="aq_indoor";
export const id="dl_e311814cb85af6bbf0c7";
export const url=new URL("../icons/aq_indoor.svg?v=a2c6f79607ba6be23b94235d35255e9d680d7710997c8b4962818ef5070692e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
