export const name="custom_typography";
export const id="dl_9a7dba1bf84d4d28b5af";
export const url=new URL("../icons/custom_typography.svg?v=e4c84cabb25ccb7982e07a2af092ffee44389732495d8265249f1526a8ff2ba5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
