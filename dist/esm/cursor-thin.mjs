export const name="cursor-thin";
export const id="dl_c834cd169b104be99595";
export const url=new URL("../icons/cursor-thin.svg?v=034e40c405e01df24688036b78917f4227bae9111bc85d2bca3c1286e663b4ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
