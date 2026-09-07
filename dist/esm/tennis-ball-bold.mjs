export const name="tennis-ball-bold";
export const id="dl_86739cb17ba844e0901b";
export const url=new URL("../icons/T/tennis-ball-bold.svg?v=7cf816b3770076ad257bf2d4e8e69cbee6d432b458df9501c9a4aea105cc6185",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
