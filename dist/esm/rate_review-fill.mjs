export const name="rate_review-fill";
export const id="dl_81a561030bdc4e53d8df";
export const url=new URL("../icons/rate_review-fill.svg?v=42d1af8d489535dde85ed29c0d4ab6eacad49fc1677176c83ed3f3d36b5bab28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
