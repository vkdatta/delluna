export const name="divide-bold";
export const id="dl_95823ce78f6d4304a5ee";
export const url=new URL("../icons/divide-bold.svg?v=2cf4f80d89bb1952e0bd81443cd149b26ff3b017ec9822a4555360d70db7f982",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
