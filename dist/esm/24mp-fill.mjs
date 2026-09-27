export const name="24mp-fill";
export const id="dl_5bd472df0d7530aa2e86";
export const url=new URL("../icons/24mp-fill.svg?v=3cad67fff2fdd310273d6ee522078cbeaeb41232d20bb17b0fd5049e3341ba68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
