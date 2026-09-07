export const name="account_remove";
export const id="dl_bdea427b6e83472fbe93";
export const url=new URL("../icons/all_60_named_svgs/account_remove.svg?v=ab10c9a2d27c39d12506a96878903793ebb04cec60ab872aabe5a563eb6061fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
