export const name="double_arrow-fill";
export const id="dl_683cae63976e4763883d";
export const url=new URL("../icons/double_arrow-fill.svg?v=fdaaf6d804e05d71568035f3238049f04347fdf209cd5afc914974c319f642fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
