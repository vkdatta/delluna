export const name="skip-back-circle-fill";
export const id="dl_5e0d9d77022126bf9722";
export const url=new URL("../icons/skip-back-circle-fill.svg?v=dd4f87d1bfc1e884fac4d9b232d14d80233b7bdb65516a7d4734eda6fb44960d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
