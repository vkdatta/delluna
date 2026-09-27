export const name="pillswap";
export const id="dl_ea5d6a919b77457eb8a5";
export const url=new URL("../icons/pillswap.svg?v=432910ea71f2bb77dbd0477332fa7a1a501bff6f384ae48837a6fbd52a11f344",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
