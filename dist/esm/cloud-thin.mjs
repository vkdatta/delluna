export const name="cloud-thin";
export const id="dl_b49bf853394f4bb3800e";
export const url=new URL("../icons/cloud-thin.svg?v=55466604013fac48a670e5ed08c761e05fbf5c906414dbc328008e910d9eee52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
