export const name="crossword-fill";
export const id="dl_39c5b3f8e46d92368fef";
export const url=new URL("../icons/crossword-fill.svg?v=984f0bc2a8cf11be48d59317f2b609e30f7eda2672770fd65886dff9f18b7421",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
