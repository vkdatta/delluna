export const name="bluetooth-x-duotone";
export const id="dl_1ea1168a329f40269157";
export const url=new URL("../icons/bluetooth-x-duotone.svg?v=1fdf9728f5f7d8ff4d3feb1430a56a7274bd37811d55a3bba2f0a4cf7a82e613",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
