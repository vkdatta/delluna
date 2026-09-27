export const name="arrows-split-duotone";
export const id="dl_cebb20dee16d4efaac65";
export const url=new URL("../icons/arrows-split-duotone.svg?v=8b1c01821e82584cfd01c219d6ca7d570df169b2bdb11a7bc7d45e5406683871",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
