export const name="thumbnail_bar";
export const id="dl_5f8d4a3389cc02f5a966";
export const url=new URL("../icons/thumbnail_bar.svg?v=74ae195a05c71fffb2a1bea7a9906b84350f00fec368a1e83bfcf3c38e7c9eb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
