export const name="cigarette-slash-fill";
export const id="dl_b2b93d176e294fd7afa0";
export const url=new URL("../icons/cigarette-slash-fill.svg?v=257d1e5aecc8af641e1d23384e1cbe56220dbab17bbbc9de13ca3ea3d802eb79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
