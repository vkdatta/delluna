export const name="check-duotone";
export const id="dl_c1b4a6302a55491c9327";
export const url=new URL("../icons/check-duotone.svg?v=fff81fe442247c3652fbee48562c557c9ccd63be500fcd809e15de866fa0f097",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
