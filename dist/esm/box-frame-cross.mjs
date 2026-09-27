export const name="box-frame-cross";
export const id="dl_2466514aafd7faa5ef91";
export const url=new URL("../icons/box-frame-cross.svg?v=8201b95e263d80efac4719fce8608b7b45d93668b1e2cb8d37a213f41ab3608c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
