export const name="handbag-light";
export const id="dl_4ddb8dd263ce4d2e8e54";
export const url=new URL("../icons/handbag-light.svg?v=a0ba6922301fd2a80c299cb2a8f4f8baea36c38cfa854563e4a578b78f9b7afa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
