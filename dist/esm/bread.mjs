export const name="bread";
export const id="dl_c78bf1aa4bf34886a6f0";
export const url=new URL("../icons/bread.svg?v=ccf569e2f62609eef488ed8208300284e209224f6eb4ba5d1b1effac646d31cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
