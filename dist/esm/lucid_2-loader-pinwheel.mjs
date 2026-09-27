export const name="lucid_2-loader-pinwheel";
export const id="dl_ef4d844ddb1f49d29e34";
export const url=new URL("../icons/lucid_2-loader-pinwheel.svg?v=5b36b82e586b010db290e5b51a20a491ef5d19e993dc130453f59e06c6ec889b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
