export const name="next_plan";
export const id="dl_db9829e8aec1413cbced";
export const url=new URL("../icons/N/next_plan.svg?v=fa7d4d1960b0042b32d144ee0d58e4b73d2a4ce0f2ad80c518622fb02d08e119",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
