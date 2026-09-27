export const name="ssid_chart";
export const id="dl_42dd3fafcb0cc71b0f03";
export const url=new URL("../icons/ssid_chart.svg?v=b4a4c08b2316d6a3bc9a818a44e0757b7adf53997c88b15dba48cfd77bb53e06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
