export const name="maps_ugc-fill";
export const id="dl_646bf0cbc16a0042ec6a";
export const url=new URL("../icons/maps_ugc-fill.svg?v=94dd66304be518a18ec1fecbf5ea6eded3eda1820fad29f00f45a29b43117b9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
