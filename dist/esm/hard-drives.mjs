export const name="hard-drives";
export const id="dl_94cad8d9758e4eb4a1e8";
export const url=new URL("../icons/hard-drives.svg?v=c4ba6f3519182785a6b99d04d2d0fdbbb0bcb54f1e3c916c49e1af59ea77b6f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
