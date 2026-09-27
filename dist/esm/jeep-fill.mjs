export const name="jeep-fill";
export const id="dl_af2054b0315d4122b700";
export const url=new URL("../icons/jeep-fill.svg?v=e41760db8fc2ca945c57b7ddfd6311f4ae834559a45511c4d6016e7c78d912ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
