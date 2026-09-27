export const name="arrow-line-right-duotone";
export const id="dl_6fd1fea61c4b4a8190b3";
export const url=new URL("../icons/arrow-line-right-duotone.svg?v=4312aa3ded61a57dadc0886d43dfc1cf3d40f095a05d8e4160acc70eff626f63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
