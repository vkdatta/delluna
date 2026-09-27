export const name="float_portrait_2-fill";
export const id="dl_97813a97bb41c0d798a1";
export const url=new URL("../icons/float_portrait_2-fill.svg?v=469a4ff3dd26f9f4aea3cd299481c3b8cd878154574a8c3704fa55bdd9bdc25d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
