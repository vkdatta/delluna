export const name="chevron_line_up";
export const id="dl_0f3c9c9bc26bdb67617e";
export const url=new URL("../icons/chevron_line_up.svg?v=dd3e2fc20e98e8a4670e78dbbc6d5a21180358ddacdb1275d446b373fb55c34c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
