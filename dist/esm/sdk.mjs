export const name="sdk";
export const id="dl_094f8ed8f8b53d1a3f85";
export const url=new URL("../icons/sdk.svg?v=48779cd6d3122a6f364aab832d9b587ecaad805a3565da5bca813e92a6b1c4e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
