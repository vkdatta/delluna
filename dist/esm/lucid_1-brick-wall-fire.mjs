export const name="lucid_1-brick-wall-fire";
export const id="dl_dfaa67c576f94eb1b15d";
export const url=new URL("../icons/lucid_1-brick-wall-fire.svg?v=caf4db6272fa4afb22e474aa46d5529083477a1013ff73d2434ec2f5ffbf29e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
