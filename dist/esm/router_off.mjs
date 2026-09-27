export const name="router_off";
export const id="dl_703bbf8903f6bf1340cf";
export const url=new URL("../icons/router_off.svg?v=bcf24f0a049bb4e24d117c6c505f15cee8b8642127a5a3806eca0d2e30714839",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
