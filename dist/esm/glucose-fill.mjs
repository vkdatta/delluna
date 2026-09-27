export const name="glucose-fill";
export const id="dl_4d126e88f1e77789c265";
export const url=new URL("../icons/glucose-fill.svg?v=538c633972d4345705e7f9eb9b1405c38ca322f071389d77be5fd56b681165d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
