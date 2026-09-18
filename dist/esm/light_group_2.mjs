export const name="light_group_2";
export const id="dl_52dc9392d3174d5e9c7d";
export const url=new URL("../icons/light_group_2.svg?v=7c8b2b5073bbb71da9bc6ab0022ee9f8957d8f150ddbb4044347e0f6e1852d4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
