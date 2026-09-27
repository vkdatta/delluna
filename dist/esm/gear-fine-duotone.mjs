export const name="gear-fine-duotone";
export const id="dl_8ec0d35a2f5d4ca68295";
export const url=new URL("../icons/gear-fine-duotone.svg?v=ef426bfcae86fc2cb66aac725df252274ae4071a3505f413a6918312f63e1e88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
