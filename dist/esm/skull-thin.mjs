export const name="skull-thin";
export const id="dl_8bbc27ac09d8d52c29a5";
export const url=new URL("../icons/skull-thin.svg?v=638c7f5cb3613ebac621956371b056c8c8aba1e6faaf104f04ad8040e4787746",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
