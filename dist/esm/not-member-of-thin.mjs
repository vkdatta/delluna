export const name="not-member-of-thin";
export const id="dl_17ad57911dbc4ccea504";
export const url=new URL("../icons/not-member-of-thin.svg?v=0416fe61a91fb5f9772f2e7f6a5f65d656f471376743cce9befeaa56e1601125",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
