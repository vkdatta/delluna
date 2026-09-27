export const name="arrows_output";
export const id="dl_f614ccb9a2c460880247";
export const url=new URL("../icons/arrows_output.svg?v=e9cfd8e2a74b01ad57b86a842911b13f149050087953fb56978cb57793a150c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
