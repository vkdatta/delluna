export const name="number-circle-one-light";
export const id="dl_498b26637632471b8441";
export const url=new URL("../icons/number-circle-one-light.svg?v=f862ba1c872ec11ea9952e04b1b839d58fb821a0afbdb646f04c6258fb14c75a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
