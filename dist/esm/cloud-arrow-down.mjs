export const name="cloud-arrow-down";
export const id="dl_381b9cce44c748b9b146";
export const url=new URL("../icons/cloud-arrow-down.svg?v=a1f8826385e988f578c8a69824a7402c50c3c73931e027c4d91a634f0c75ae11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
