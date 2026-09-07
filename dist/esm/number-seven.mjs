export const name="number-seven";
export const id="dl_8ec0f672134745b4b106";
export const url=new URL("../icons/number-seven.svg?v=4df3b3b4d1eb4ec5e15bd7623c6ab168c907ad1a40c02bc97bef84e3338d0579",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
