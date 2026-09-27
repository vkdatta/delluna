export const name="chart-donut-thin";
export const id="dl_27974af4aa0d4800ad3d";
export const url=new URL("../icons/chart-donut-thin.svg?v=402233899af7b6ffb6fabca06d50acc4954f1f1bb9a6b3ce6ad3e36b6187f101",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
