export const name="text-h-four-fill";
export const id="dl_0900c59cc833952998c7";
export const url=new URL("../icons/text-h-four-fill.svg?v=03d2c049a5412be5aa646f8741aebec73f06b407081ec56e3029e0f2a6d80b37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
