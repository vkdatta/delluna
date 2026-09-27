export const name="lucid_3-map-pin-x-inside";
export const id="dl_c94b2d5ba43f49cfbaf2";
export const url=new URL("../icons/lucid_3-map-pin-x-inside.svg?v=7c6e05a542bacb4d50bbc4ca02ed868c62350a0c39fbafe760369b7d79f3baa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
