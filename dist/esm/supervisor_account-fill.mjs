export const name="supervisor_account-fill";
export const id="dl_81a863421a6e57e69c24";
export const url=new URL("../icons/supervisor_account-fill.svg?v=bb12d796dff3e375a410de0089b402b317f480b94fd85df8064221a9a0f04bd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
