export const name="priority";
export const id="dl_d0de101ae7434311880f";
export const url=new URL("../icons/P/priority.svg?v=fdba7f7a7f4bf26407697e2eb48f63df8f57f2d94f24e93f34e62ae0301ef0a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
