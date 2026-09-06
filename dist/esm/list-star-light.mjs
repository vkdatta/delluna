export const name="list-star-light";
export const id="dl_de1acdc3d1184e41a4c4";
export const url=new URL("../icons/list-star-light.svg?v=4e599dc8493e268b45e7d1d8fee3f45dd81a370889edee05e817bce6461622be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
