export const name="lips-fill";
export const id="dl_7fa266a9dea54cb9bb84";
export const url=new URL("../icons/L/lips-fill.svg?v=d036b392753ee9762456a74f70cf17a67570cec0edc96e9bb3c0174b79b0f273",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
