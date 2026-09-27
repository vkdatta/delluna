export const name="train-fill";
export const id="dl_7025cc9c6c8fed546fb1";
export const url=new URL("../icons/train-fill.svg?v=52e1749537e9fe9b9188dd9e7461c9ebf7a0ed51d602b7e2f8685fb5ce1ab80f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
