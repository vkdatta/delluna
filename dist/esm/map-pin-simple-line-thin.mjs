export const name="map-pin-simple-line-thin";
export const id="dl_57f88d33f1384eaea671";
export const url=new URL("../icons/map-pin-simple-line-thin.svg?v=6b0a49b151c7ab9e914818378ab04244572ac98b596711d1d77886e8ef5c3d44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
