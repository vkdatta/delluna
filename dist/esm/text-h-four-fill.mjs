export const name="text-h-four-fill";
export const id="dl_bcb69a7a372b4576906e";
export const url=new URL("../icons/T/text-h-four-fill.svg?v=03d2c049a5412be5aa646f8741aebec73f06b407081ec56e3029e0f2a6d80b37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
