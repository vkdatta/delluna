export const name="safety_check_off-fill";
export const id="dl_f55e4d745a0e017fa365";
export const url=new URL("../icons/safety_check_off-fill.svg?v=c7980c4edb75e6534c6f2fcc74e5059b50d3dc7300b61e78fe06f77c70d91884",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
