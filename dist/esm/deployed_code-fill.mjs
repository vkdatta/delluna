export const name="deployed_code-fill";
export const id="dl_02da9cf8b06230a16368";
export const url=new URL("../icons/deployed_code-fill.svg?v=4952bc80a249753fe312d6251a63b3af0b0ea77ed6a6017ceade30fb0d16dff8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
