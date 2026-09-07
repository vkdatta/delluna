export const name="number-one";
export const id="dl_9de53fcf4c1a4b6e8068";
export const url=new URL("../icons/number-one.svg?v=08173603b00e8b7dc8d4da51deec6ec6c1be056a96bab4622f723f13a7e6637b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
