export const name="bottom_panel_close-fill";
export const id="dl_c1f44580147546ef839e";
export const url=new URL("../icons/bottom_panel_close-fill.svg?v=9cd3e949329703ca69a6afc963b228652169abb24d9de23df58946cf345b9383",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
