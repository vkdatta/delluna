export const name="inbox_customize";
export const id="dl_04b3badb243725b9f339";
export const url=new URL("../icons/inbox_customize.svg?v=6fb4529f3fc4c67bc128d868b4f7bb4dc2b8ee47f1287a05164e9d76371fc57c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
