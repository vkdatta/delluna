export const name="compare_arrows-fill";
export const id="dl_86d7c5f578d914b32038";
export const url=new URL("../icons/compare_arrows-fill.svg?v=b01ebf4a55dbdb2e6fca5a62051f245be412fe465ea9e408c7f0e909e7019f9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
