export const name="back-dismiss";
export const id="dl_b6cf1f375c52419d9e3c";
export const url=new URL("../icons/close/back-dismiss.svg?v=2371c5448273829623a994e0a858c72f50bef3fd70613848370d191003d3e617",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
