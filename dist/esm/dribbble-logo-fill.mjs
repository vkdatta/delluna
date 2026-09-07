export const name="dribbble-logo-fill";
export const id="dl_c5c2798674744abfb9f4";
export const url=new URL("../icons/dribbble-logo-fill.svg?v=ecce4ce2043a88dcad69e8a27c32b7088f01989e22291ea4cf87833bf812edfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
