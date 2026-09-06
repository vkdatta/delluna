export const name="face-mask";
export const id="dl_cc9bdbc2fcc44aafb8d7";
export const url=new URL("../icons/face-mask.svg?v=7814cc5bddf4e8b35148ab1284641a96d8e389cf8010ed299803e10bd17183d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
