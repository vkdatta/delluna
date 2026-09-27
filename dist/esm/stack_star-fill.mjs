export const name="stack_star-fill";
export const id="dl_ea96af1edac91a45d1cc";
export const url=new URL("../icons/stack_star-fill.svg?v=6565f8a2c0388025cd4b25ba9c09ea4b36eae23311a66a1759ecfa2803265133",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
