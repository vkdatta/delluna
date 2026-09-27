export const name="tree-light";
export const id="dl_9f0c94e5547eae3749e8";
export const url=new URL("../icons/tree-light.svg?v=6f560c16b1b5ddedcd9b7035759abbc696327d7d583e04e2e2b603bb5282b1f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
