export const name="paint-bucket";
export const id="dl_f6c5c385d3464fcd8b39";
export const url=new URL("../icons/paint-bucket.svg?v=0c45d3c519ee2b33d8d729a3bea560b47b3b137d31bbc7a70cbf183fbf9b4dc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
