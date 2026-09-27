export const name="oven-thin";
export const id="dl_2c7ee2d1a2044dcf8083";
export const url=new URL("../icons/oven-thin.svg?v=b2f550ee3fe68a55e6383fb523d786e01f374568be5a3599eaa7665286808b6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
