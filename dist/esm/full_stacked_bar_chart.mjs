export const name="full_stacked_bar_chart";
export const id="dl_c55bdf4607cad85f7ad8";
export const url=new URL("../icons/full_stacked_bar_chart.svg?v=8c170915c29aaab2c857199d1c939de642b2a22fb203a79ee1938b2cf1c4a873",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
