export const name="person-simple-bike-fill";
export const id="dl_a018bc5856ce4820b93e";
export const url=new URL("../icons/person-simple-bike-fill.svg?v=840fd155b6475fef32ef6cf8fb0ba620f0f1b12c31d200e3566f00615f7bf9eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
