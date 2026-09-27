export const name="garage-fill";
export const id="dl_b8c7ddad282d419f9167";
export const url=new URL("../icons/garage-fill.svg?v=a4983d8bcf3f4c716080886fa3f81d0988c17dc98d0e95c2faedd4f22e22a075",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
