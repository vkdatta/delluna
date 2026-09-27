export const name="detective-light";
export const id="dl_7caadc1468684fdbae7f";
export const url=new URL("../icons/detective-light.svg?v=8d2c00bf751f48b3e2a2f8f644bfb0240183995ba183b28608c676520a3af2bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
