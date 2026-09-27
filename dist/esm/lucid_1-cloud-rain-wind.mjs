export const name="lucid_1-cloud-rain-wind";
export const id="dl_7b36e10e047644b195f8";
export const url=new URL("../icons/lucid_1-cloud-rain-wind.svg?v=fdbd1e46d12e4d52221a985cf48f3d73ee257b536af13db18a1ba9d47d5508b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
