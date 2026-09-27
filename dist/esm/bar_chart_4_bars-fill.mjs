export const name="bar_chart_4_bars-fill";
export const id="dl_19a23bb455aba159043e";
export const url=new URL("../icons/bar_chart_4_bars-fill.svg?v=04b99418271a8899a397802acb85df97fca30c4aad3ff4d7f1c0c33212dfe7fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
