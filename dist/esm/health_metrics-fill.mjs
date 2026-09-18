export const name="health_metrics-fill";
export const id="dl_2b0de3fc9aad4c6385b9";
export const url=new URL("../icons/H/health_metrics-fill.svg?v=7e4e9846f0cac7c2d4373d346de7ff659841ee0768eaf2bfc9ad7bf3dede7241",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
