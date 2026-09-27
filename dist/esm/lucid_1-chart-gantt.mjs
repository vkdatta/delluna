export const name="lucid_1-chart-gantt";
export const id="dl_4043bf99afd14df98873";
export const url=new URL("../icons/lucid_1-chart-gantt.svg?v=97df0b627509cb22d59a447474bdeffa68c840e3b7df5ae822bfae9f4f919e5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
