export const name="theater_comedy";
export const id="dl_f395918f1365404db424";
export const url=new URL("../icons/T/theater_comedy.svg?v=1e438a5bcdb482fe700bfeb351cdc3fa887366ca3b5429cac582388c16384509",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
