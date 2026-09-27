export const name="cast_warning";
export const id="dl_0e12da70ad237ce00abb";
export const url=new URL("../icons/cast_warning.svg?v=583ea48da0909e7dcdb1471b9c6f4e7a4b865e1627cbac399b98f8edb22c6dc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
