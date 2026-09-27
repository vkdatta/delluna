export const name="lucid_3-slash";
export const id="dl_84c8a399d0224beb92e9";
export const url=new URL("../icons/lucid_3-slash.svg?v=129ff1078699072ee30d6708c6eacbc172948aac0053aaa24b007f0299be6e63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
