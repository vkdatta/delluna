export const name="info-thin";
export const id="dl_5a6127fa4b7c40e0b0fe";
export const url=new URL("../icons/info-thin.svg?v=87f015e01890e9b68dc2f4398135750d604e2499b0283b2bd21659668f362f9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
