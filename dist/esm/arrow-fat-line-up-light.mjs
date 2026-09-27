export const name="arrow-fat-line-up-light";
export const id="dl_7b9e78e4fdb54f0581af";
export const url=new URL("../icons/arrow-fat-line-up-light.svg?v=7d8a5261d5517300dec9a7ae0ba18df9c00b8000c86eae67cb7bcc65a8a5be78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
