export const name="onigiri-bold";
export const id="dl_02dd412fad9d4512ba67";
export const url=new URL("../icons/onigiri-bold.svg?v=35872f6cad080f1423dd54e6fd14d472b6bffaca4c3f2ee351e387a1909a14cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
