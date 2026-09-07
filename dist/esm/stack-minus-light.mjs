export const name="stack-minus-light";
export const id="dl_b5f8086f9d89467e887f";
export const url=new URL("../icons/S/stack-minus-light.svg?v=01c5eb7e9cda6bb6d7545a7c7df73ac1c88b7676ed1aedaebe432185d232f089",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
