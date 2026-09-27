export const name="check-square-thin";
export const id="dl_551637fc203e49e6b8f8";
export const url=new URL("../icons/check-square-thin.svg?v=15bddad4e0a6680c9ef7f78a803c1291de54d2915346fb73da9696fae84b02b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
