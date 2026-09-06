export const name="align-center-horizontal-simple-duotone";
export const id="dl_79c2d6dedcfb415aac69";
export const url=new URL("../icons/align-center-horizontal-simple-duotone.svg?v=96c4f770af24c3df114a727831dc3b10f3b2bd75ea6d7c7d2f32a52bbaa04692",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
