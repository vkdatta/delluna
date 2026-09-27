export const name="calculate-fill";
export const id="dl_17136bf865cac1a75121";
export const url=new URL("../icons/calculate-fill.svg?v=1751dcb32cf5556f80c2c501196cbeefba78f08a7756f6eda64e7af4982a31d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
