export const name="pie_chart";
export const id="dl_f58d7151250947899177";
export const url=new URL("../icons/pie_chart.svg?v=8313cd0d32c8b173e30b07c247c40babdc4ba424149ae07023d00d1aa9e03bfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
