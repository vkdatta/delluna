export const name="smiley-meh";
export const id="dl_d1191d75eb5f6e08fd9b";
export const url=new URL("../icons/smiley-meh.svg?v=d67f742b03d29ead78f8e555209fc1ba4f0caba6107d88453cee2402eccd072a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
