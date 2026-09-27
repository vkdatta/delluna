export const name="family_home-fill";
export const id="dl_7d89cd81b0ad78e31d31";
export const url=new URL("../icons/family_home-fill.svg?v=c3936cac779759f2710a370647a6fd16c240d2baa6149550818697578d56ee5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
