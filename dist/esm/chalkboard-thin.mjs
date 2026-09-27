export const name="chalkboard-thin";
export const id="dl_9e1500d3f1964afdbb06";
export const url=new URL("../icons/chalkboard-thin.svg?v=9a3a1a0568f8bd8f10af508e9528d04ad92dfd3e520295483ee5a88f5a86fad9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
