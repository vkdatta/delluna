export const name="lucid_2-dumbbell";
export const id="dl_1c8726f7059b43a5bc6b";
export const url=new URL("../icons/lucid_2-dumbbell.svg?v=a47acd2ba8df7fd573cb91715de6ad81dfaffc56c87b55efd20296e8fcc3ca30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
