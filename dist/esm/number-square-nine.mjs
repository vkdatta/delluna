export const name="number-square-nine";
export const id="dl_7ffcfd2a76a148aeb939";
export const url=new URL("../icons/number-square-nine.svg?v=51a80a51040ec1798b567f094a185445d650211c0826e403791ad98bd50cd05b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
