export const name="test-tube-bold";
export const id="dl_5cd40bf7c79544c98390";
export const url=new URL("../icons/T/test-tube-bold.svg?v=4c6bb849ae57dc84d27ca52b23be5b1ff17267ca100ca29ddf8b1f35a3832923",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
