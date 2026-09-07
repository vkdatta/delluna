export const name="user-circle-thin";
export const id="dl_479e656040274f2f87ae";
export const url=new URL("../icons/U/user-circle-thin.svg?v=ebe7535671787f8f5f4a97daac4df7c24109df14257f254dd47bd29d5b223414",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
