export const name="align-right-simple-fill";
export const id="dl_1e97ddd44d4e4f74a42b";
export const url=new URL("../icons/align-right-simple-fill.svg?v=2bd9ae713c02c2521804b2b12a972e0095b9128eb32ff08ccfa7ec99ac4282eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
