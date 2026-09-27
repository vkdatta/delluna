export const name="shield-checkered-thin";
export const id="dl_4c0c2892f2b1eb978445";
export const url=new URL("../icons/shield-checkered-thin.svg?v=4544e89a5d03ce72680fdd6aa4e890efcfed02113c6e5ae351e0685636687a8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
