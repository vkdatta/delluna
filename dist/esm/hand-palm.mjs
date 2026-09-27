export const name="hand-palm";
export const id="dl_35ce130893964e84b5ab";
export const url=new URL("../icons/hand-palm.svg?v=a94380ce58d0faffa78e1eab5fbd93911d85cd8aa910e92f93aea051274b5f86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
