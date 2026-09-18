export const name="deployed_code-fill";
export const id="dl_3cef4fffc4204bbdbf81";
export const url=new URL("../icons/deployed_code-fill.svg?v=bbd62caa6811cad43ad290f5adc21ec4d6b05bd9b6e27308f4c5f025b4ce722b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
