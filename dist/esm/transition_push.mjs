export const name="transition_push";
export const id="dl_a4cfaa5231e4b947a53b";
export const url=new URL("../icons/transition_push.svg?v=8444a1384b85a453295c90ba90a224999d9492ad7fa65d377b25e83c31b216fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
