export const name="square-bold";
export const id="dl_cf0ffc3fc79c4471b0d4";
export const url=new URL("../icons/S/square-bold.svg?v=754039b5452f502b6888a1eb08ca3982ea86388347c428593da61eb36c62c2f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
