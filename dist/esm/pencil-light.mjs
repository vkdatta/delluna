export const name="pencil-light";
export const id="dl_2f2f3bde82564ed39d5c";
export const url=new URL("../icons/pencil-light.svg?v=d5f4734c8c41192ddbd0d618e741958dd0ca7a24ddb89723ad9675d9a2f18ef2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
