export const name="planet-bold";
export const id="dl_ec78b4af416c4a01bd43";
export const url=new URL("../icons/planet-bold.svg?v=c09f9ca2f6def9eccf1114166fa862028bdfe11e9ea6cfa6bcf6a45b4ec1c757",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
