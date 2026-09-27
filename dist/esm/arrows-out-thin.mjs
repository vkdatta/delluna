export const name="arrows-out-thin";
export const id="dl_bf35b38d3bdd4323ae92";
export const url=new URL("../icons/arrows-out-thin.svg?v=477773bef29d8a9fc8afb143132b3c08abc9f1f0c5c2ad6cc3e27cdf0c7d0865",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
