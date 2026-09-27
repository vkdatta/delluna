export const name="battery-medium-bold";
export const id="dl_550ed7df7dd34d6cbb2a";
export const url=new URL("../icons/battery-medium-bold.svg?v=6b9ee4686306c469cd7434366d9473f3b25c7f1d8a77c85596553374c529f1f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
