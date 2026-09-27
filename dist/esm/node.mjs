export const name="node";
export const id="dl_6f2421a552c3431c871d";
export const url=new URL("../icons/node.svg?v=6e2347f92d4425f692668c22d5cffad959c64cba28a66f491663a1c4e1b7b9c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
