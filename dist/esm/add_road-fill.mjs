export const name="add_road-fill";
export const id="dl_8fa27855cf767df920fc";
export const url=new URL("../icons/add_road-fill.svg?v=ef0a1746e43edec9864aadd8332f382f102363c0f748cb2632c4e24484b746ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
