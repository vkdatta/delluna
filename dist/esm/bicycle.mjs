export const name="bicycle";
export const id="dl_ab2c0cfa484345ff96f4";
export const url=new URL("../icons/bicycle.svg?v=080e760013dcb5808ccda0b83a34cd1c9cd55b857e1a035ac11105968ce91f6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
