export const name="bubbles-fill";
export const id="dl_795f259a20970d62f30e";
export const url=new URL("../icons/bubbles-fill.svg?v=8ad44c33345448145c4c912bb610fff9aad6a833ddc30820dd1d2d31d15bfc68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
