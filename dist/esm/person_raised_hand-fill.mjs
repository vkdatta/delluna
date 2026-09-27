export const name="person_raised_hand-fill";
export const id="dl_8051ed749201a411b98c";
export const url=new URL("../icons/person_raised_hand-fill.svg?v=7b9dd3ebdaf901b8f00335c0f151ff06cb53356ab3297ec04b9f4c759926b650",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
