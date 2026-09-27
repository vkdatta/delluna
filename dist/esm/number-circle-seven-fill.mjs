export const name="number-circle-seven-fill";
export const id="dl_344dc294ce334f8cafa0";
export const url=new URL("../icons/number-circle-seven-fill.svg?v=876ba6b79d2c20b615379bb15dea55e5ca8efc266bf840e59bc6275e0c6a4abe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
