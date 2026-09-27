export const name="onigiri-bold";
export const id="dl_02dd412fad9d4512ba67";
export const url=new URL("../icons/onigiri-bold.svg?v=8ad369f8e5f06fdc7af21fcf93c069553e69c1f39a4091da94407d8e86a7b6b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
