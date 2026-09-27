export const name="tram-thin";
export const id="dl_51f65373a5b32b323aa6";
export const url=new URL("../icons/tram-thin.svg?v=f39e5957f005ed21832196531d2798cce7c95f638123a5cd03a177bbfe09cd88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
