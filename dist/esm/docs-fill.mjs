export const name="docs-fill";
export const id="dl_b77e0211b8ba5f0024a7";
export const url=new URL("../icons/docs-fill.svg?v=54026168159621020d084ab15237aba66c8d661a55241dae6a4bb79685ad0522",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
