export const name="snowmobile";
export const id="dl_71a97ff522b376b97cbe";
export const url=new URL("../icons/snowmobile.svg?v=192e86617ee961c5fbbe93a5ed633ec4c17a69a182fa2362853d04cdfce0d965",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
