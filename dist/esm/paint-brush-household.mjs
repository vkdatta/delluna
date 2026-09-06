export const name="paint-brush-household";
export const id="dl_344e54f1fcea4b53bc06";
export const url=new URL("../icons/paint-brush-household.svg?v=8cca1ce1f445ffcd2a19941c23884866f1feba994873524f2d5a7a4b934f3e4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
