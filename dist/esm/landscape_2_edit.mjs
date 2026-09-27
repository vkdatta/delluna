export const name="landscape_2_edit";
export const id="dl_04e37ff307430f07d79a";
export const url=new URL("../icons/landscape_2_edit.svg?v=7c90f956e5b73bacc59874737c4c64671b97ba52e3b302b0cdf4e9dd7326ab76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
