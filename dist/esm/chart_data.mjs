export const name="chart_data";
export const id="dl_6bbc169d95b4acdb3aef";
export const url=new URL("../icons/chart_data.svg?v=612183a48f7cfbeaae61f471cce07db5b6de03af2c637952124d05e0c19cc2fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
