export const name="fire-truck-bold";
export const id="dl_14e03df66d9c48b3ac57";
export const url=new URL("../icons/fire-truck-bold.svg?v=7a1de5848039b83e8f022db358022031a66761479f9fcd33ff4fb78bb717bb25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
