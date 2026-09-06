export const name="lucid_1-circle-arrow-out-up-left";
export const id="dl_5be149d43dc0464c8227";
export const url=new URL("../icons/lucid_1-circle-arrow-out-up-left.svg?v=899660dd4d9caad5a5b3e286e153c13bee046ad266abc8e19f957090435a58be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
