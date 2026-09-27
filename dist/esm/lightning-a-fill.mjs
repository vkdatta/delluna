export const name="lightning-a-fill";
export const id="dl_919bde2ab54f4548be30";
export const url=new URL("../icons/lightning-a-fill.svg?v=8f74d6c9c8ee2e898b29a462c01945865724291ee79d4163f758d7d40a9b7c7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
