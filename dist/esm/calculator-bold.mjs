export const name="calculator-bold";
export const id="dl_67d9b62580be412fa266";
export const url=new URL("../icons/calculator-bold.svg?v=779668e1c413067e6aceb05bca1ab89d91378eda8fcc7aeac2aa72d002cd2e08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
