export const name="add_chart";
export const id="dl_f1bea4d482b640298b5a";
export const url=new URL("../icons/A/add_chart.svg?v=45832eaab424ae561f1cdc95bd04b7c1059bb3745c06a03c6314275820e3cea7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
