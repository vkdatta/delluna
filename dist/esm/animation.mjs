export const name="animation";
export const id="dl_d63fc4a5042e4857892d";
export const url=new URL("../icons/A/animation.svg?v=332e3e9f3ae00ee451c559ad2d795db924d71e91747afe5e79d7cefe51c1ee6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
