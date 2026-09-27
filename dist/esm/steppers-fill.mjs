export const name="steppers-fill";
export const id="dl_528917c85565c9f98b71";
export const url=new URL("../icons/steppers-fill.svg?v=418e2f1ddc3601d1cc62550aaf36879300f6be820e36c7c217187b8d46c6b20d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
