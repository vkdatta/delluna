export const name="1k_plus-fill";
export const id="dl_cb415d801dc540b8bc13";
export const url=new URL("../icons/1/1k_plus-fill.svg?v=59833aa7dcbcf6cc831dc86e9366899dfc8de53f18a8085d4c5521debfdad307",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
