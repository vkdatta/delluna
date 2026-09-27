export const name="bath_soak-fill";
export const id="dl_76f85ef689f095738791";
export const url=new URL("../icons/bath_soak-fill.svg?v=d9e3f65679dbb5345790055a196d8fe0c813a4dee390422f1c86e332b5fa51d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
