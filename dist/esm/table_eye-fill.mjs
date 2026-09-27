export const name="table_eye-fill";
export const id="dl_02a79d9723fe543450f0";
export const url=new URL("../icons/table_eye-fill.svg?v=a26357d2ed96fc2cf0c7a4618323a86d5317139abaeef66b6542951f85e6158f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
