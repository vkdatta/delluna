export const name="number-square-zero-light";
export const id="dl_8ece224898304ecbbaa6";
export const url=new URL("../icons/number-square-zero-light.svg?v=4a73e161d7c1f4b087c5a4c5cbf423f49aecdf44998d1c1795a8ad0c45efbf10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
