export const name="seatbelt-thin";
export const id="dl_b22d8b9f1d87be294914";
export const url=new URL("../icons/seatbelt-thin.svg?v=15a2ed8233c71589120146aeaaac3966072fe8e722186dbd0ab55bd1c1932c7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
