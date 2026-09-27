export const name="east-fill";
export const id="dl_d96ba7b51bf842d82354";
export const url=new URL("../icons/east-fill.svg?v=b24daa648a4b1fc15f6e18c33f0375cefef179b0e3214fb379c4b6cb3e2851ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
