export const name="user-x";
export const id="dl_be1fe404522d4c8faaa9";
export const url=new URL("../icons/user-x.svg?v=d45e45033b5368b03c80e942397e141b23e1ab9edd94524facce01c07142a8fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
