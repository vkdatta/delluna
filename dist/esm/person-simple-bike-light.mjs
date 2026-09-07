export const name="person-simple-bike-light";
export const id="dl_d07c947077344dcda09c";
export const url=new URL("../icons/person-simple-bike-light.svg?v=4a03ea9218e078b39a445ac67192bdbb8d7e76b3e54decf9d11e9b6de969668e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
