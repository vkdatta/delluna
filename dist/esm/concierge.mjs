export const name="concierge";
export const id="dl_03eab3070bd396d0e816";
export const url=new URL("../icons/concierge.svg?v=c0c21cb75978cac4604df098a2038c83c384b826c57f065a2d7440a7509b9750",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
