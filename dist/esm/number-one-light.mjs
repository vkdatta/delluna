export const name="number-one-light";
export const id="dl_95f7e13fc98442f281fb";
export const url=new URL("../icons/number-one-light.svg?v=25b03f2950bcb28d62b33775f329da5df7192730fcabe85bc86478c3282a2c4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
