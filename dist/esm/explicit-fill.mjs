export const name="explicit-fill";
export const id="dl_483d31fb6e8c248fc87f";
export const url=new URL("../icons/explicit-fill.svg?v=931b7de2fcf0928bb420537bc0a8085e638b968822aae20b503587193776a701",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
