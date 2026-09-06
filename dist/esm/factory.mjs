export const name="factory";
export const id="dl_b9c435d1ec4e44d8985b";
export const url=new URL("../icons/factory.svg?v=aa80d3459397014a15f50b525771dbd2edff9e005cfcda40a75e85c3c237f747",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
