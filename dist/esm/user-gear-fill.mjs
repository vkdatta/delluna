export const name="user-gear-fill";
export const id="dl_2d46555dee8357afecdc";
export const url=new URL("../icons/user-gear-fill.svg?v=5178ba25f3364952e71ea3dd973d4eae19eae24c5999f0d00301abdd031ea734",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
