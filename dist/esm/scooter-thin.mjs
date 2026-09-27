export const name="scooter-thin";
export const id="dl_e3bf58f988f02e4a87e2";
export const url=new URL("../icons/scooter-thin.svg?v=e71f434764b0ba061e112720472c7ceccab6c3442c3fc4dda57bb6a72355c060",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
