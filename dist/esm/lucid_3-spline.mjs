export const name="lucid_3-spline";
export const id="dl_8b0bdc8c7451471d91d1";
export const url=new URL("../icons/lucid_3-spline.svg?v=d6029a66885419f06c83a42259435cfb4320f1be66dcd44f0591c13cd39a9245",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
