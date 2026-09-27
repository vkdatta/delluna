export const name="grouped_bar_chart-fill";
export const id="dl_d80b480fc0352cbd442d";
export const url=new URL("../icons/grouped_bar_chart-fill.svg?v=860c76a450de9ec9c8a931059c8f2269614deb38cbbdab1fd607bf0dfbe11ff5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
