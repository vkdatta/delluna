export const name="lucid_1-chevron-left";
export const id="dl_119c47630100449f8401";
export const url=new URL("../icons/lucid_1-chevron-left.svg?v=a18305f1bb8c072a8a6b54175eb2d2d5247a11c67b8487e0e7f8af9eef21d9f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
