export const name="disco-ball-bold";
export const id="dl_73ebee3eb0784380b6d8";
export const url=new URL("../icons/disco-ball-bold.svg?v=47ee1cb868bd84990585ac052043f2af4713c7bfe8ee9c0fc71f4ff4254300a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
