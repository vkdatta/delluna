export const name="all_match-fill";
export const id="dl_17ec7f0babda9f802299";
export const url=new URL("../icons/all_match-fill.svg?v=a2efcea4b1dd460e2fe8ca82e19a35e6325ad083aac45430c79d144b9bc80616",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
