export const name="call_merge-fill";
export const id="dl_77c5d91ea4420e7306fb";
export const url=new URL("../icons/call_merge-fill.svg?v=08e67be91476b44cabd4ee02357f21bdfecdd4c26a596eb5c561428ac6a1cf8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
