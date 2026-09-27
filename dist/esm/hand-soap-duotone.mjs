export const name="hand-soap-duotone";
export const id="dl_2377eda19f8045b29217";
export const url=new URL("../icons/hand-soap-duotone.svg?v=46ccc87b9f63d683ad4c73f99e71342d63d2a765038c46a58748ac7ded886e22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
