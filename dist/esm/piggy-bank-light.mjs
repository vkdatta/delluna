export const name="piggy-bank-light";
export const id="dl_5b01dc5670994da9995c";
export const url=new URL("../icons/piggy-bank-light.svg?v=61d434f28fd717a42c06b952aa2cc91b158aa033d5ea4a7110aa66b4626a0d41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
