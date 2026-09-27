export const name="paint-brush-household";
export const id="dl_344e54f1fcea4b53bc06";
export const url=new URL("../icons/paint-brush-household.svg?v=54a5135acce921e02b3a9b1111a40ff59b977babeae1adbf935448e079e009eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
