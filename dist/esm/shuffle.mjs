export const name="shuffle";
export const id="dl_76a700cbbe52516e93bd";
export const url=new URL("../icons/shuffle.svg?v=3684d442fb7cc6569298afc4899e62f6dfd4444db2042b79a1e3b3cac7d74c6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
