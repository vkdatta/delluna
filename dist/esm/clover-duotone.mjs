export const name="clover-duotone";
export const id="dl_d75940478f8e4d6fbfb6";
export const url=new URL("../icons/clover-duotone.svg?v=e3968d30a741e77ddf8eb6668f338e2cf8216f9517703340b61b8e48d2c62bb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
