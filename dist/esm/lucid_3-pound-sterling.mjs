export const name="lucid_3-pound-sterling";
export const id="dl_bf86bd18377d4b84885e";
export const url=new URL("../icons/lucid_3-pound-sterling.svg?v=944d1298c38004fb537ae44d646aa3deef7d4cc24f79c9fbbf21b2322c264534",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
