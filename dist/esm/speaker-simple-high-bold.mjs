export const name="speaker-simple-high-bold";
export const id="dl_615a293f1e30474faa03";
export const url=new URL("../icons/S/speaker-simple-high-bold.svg?v=0bd5a9ed610a9c83d966e0a6c1232ed25f8e7b9ea118be594076ab311e029ccf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
