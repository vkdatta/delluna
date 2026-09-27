export const name="check-square-offset-fill";
export const id="dl_75618cd2b5a44740b725";
export const url=new URL("../icons/check-square-offset-fill.svg?v=e8361e6c63e450742ce8cbaff58d509e4a90b0415405aae8e6334b3709c051ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
