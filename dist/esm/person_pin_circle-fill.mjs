export const name="person_pin_circle-fill";
export const id="dl_629cdcc986234d8ebc8a";
export const url=new URL("../icons/person_pin_circle-fill.svg?v=55ff5cc3b4c23459a5346555663353f3df676b5e5b66b8566acf95e72312ec6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
