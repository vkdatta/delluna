export const name="arrow-bend-double-up-left-bold";
export const id="dl_0caa5344f5794d7e82cd";
export const url=new URL("../icons/arrow-bend-double-up-left-bold.svg?v=a6787a03e901cee32670c4adb24caf56c7508efdddb57158eb99e8d88da68eb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
