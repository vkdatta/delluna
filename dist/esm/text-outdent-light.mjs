export const name="text-outdent-light";
export const id="dl_5d9f6db1367a4ddea725";
export const url=new URL("../icons/T/text-outdent-light.svg?v=94d65305920190750193ddfe1c620ba844118c7e0812b4b1c59f2458e7587190",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
