export const name="transition_push";
export const id="dl_3ebc6d1cc9dd8a6a0981";
export const url=new URL("../icons/transition_push.svg?v=d9a22318ad8f9189d54a7b4ebc471f7537dab103783cf647f9b8435b5fcda8c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
