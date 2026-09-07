export const name="list-numbers-light";
export const id="dl_97745c343185445eae41";
export const url=new URL("../icons/list-numbers-light.svg?v=de1cad337947cdf3d92c6c64f9575c2865aa3f5d2f5b00b7ddb354071814c7b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
