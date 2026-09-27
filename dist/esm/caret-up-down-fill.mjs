export const name="caret-up-down-fill";
export const id="dl_2519c30663574c568ea2";
export const url=new URL("../icons/caret-up-down-fill.svg?v=de2afb1efd7c4d7d005bf116d2d0d91462cf1fe84032db58c648865fb393f307",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
