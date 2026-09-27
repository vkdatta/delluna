export const name="subtract";
export const id="dl_8cdf1feb2c68c2d998f6";
export const url=new URL("../icons/subtract.svg?v=1caa7f6bbd40e88397266753b7f543ac31528848b4f5c91b4710b0db5c005187",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
