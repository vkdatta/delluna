export const name="church-duotone";
export const id="dl_16cf9de31fbc486c8d28";
export const url=new URL("../icons/church-duotone.svg?v=0d19d97b6cfbfe55f862863e9c3aadc3ffe2ca4638acedc76b83e0552ecfa735",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
