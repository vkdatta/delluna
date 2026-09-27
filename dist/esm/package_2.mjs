export const name="package_2";
export const id="dl_75bc1114ce0b5efd9205";
export const url=new URL("../icons/package_2.svg?v=4f63f3113e58e9dcbde01946fce189a2b63c8803ad70f02a3c5a4224ae59e3b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
