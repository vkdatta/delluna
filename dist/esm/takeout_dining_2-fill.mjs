export const name="takeout_dining_2-fill";
export const id="dl_5426c781dc377385ff7d";
export const url=new URL("../icons/takeout_dining_2-fill.svg?v=7254f1e8b18779996888e4f9136edc9367047d1c6966c8ee625b7b93e8cb5a68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
