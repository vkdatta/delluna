export const name="align-bottom-simple-light";
export const id="dl_9e8db7a8959441bb9dda";
export const url=new URL("../icons/align-bottom-simple-light.svg?v=7dc59792ee155741ccba620219448d903de0ceff4f68176f8206b5ccbd8e64e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
