export const name="piggy-bank-duotone";
export const id="dl_996edf8b98de451dbfae";
export const url=new URL("../icons/piggy-bank-duotone.svg?v=7e7cd1997ce99297e65565a1f02255654dd0818d071d7f3b9771a55c7c9e0371",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
