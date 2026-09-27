export const name="soap";
export const id="dl_f76cdf81fd11acaa4261";
export const url=new URL("../icons/soap.svg?v=b41372334601fbbf76ab7628f55adfc4dae2373dd1a926dd3c6ac2c9541ee01f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
