export const name="keyhole-light";
export const id="dl_c8c9d7df5a174d1f912d";
export const url=new URL("../icons/keyhole-light.svg?v=eb33e9d37b65b4056d318a93f3284c5e2755b5fd649766d30b1670ae0dcebdf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
