export const name="file-css-duotone";
export const id="dl_b42ea5fabbd7407ba40e";
export const url=new URL("../icons/file-css-duotone.svg?v=c6099033f53fd13cda10f0a2024454aa95387c2165449b986fc8b1cafc36748d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
