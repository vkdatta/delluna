export const name="general_device";
export const id="dl_5a628c1fc987b133bfaa";
export const url=new URL("../icons/general_device.svg?v=d5a0f4efaffed987b7fdc16c351e526e59d8dfa6673638a2fb47eb03cd5ef33a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
