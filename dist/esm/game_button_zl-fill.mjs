export const name="game_button_zl-fill";
export const id="dl_e4d80360435caf303df5";
export const url=new URL("../icons/game_button_zl-fill.svg?v=baacc510c2520533ec4b6e56fe2ec3115b82e05f88efd4691916d1cc3ce2faa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
