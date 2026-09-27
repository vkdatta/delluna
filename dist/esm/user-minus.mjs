export const name="user-minus";
export const id="dl_db379d63b3f1724b208b";
export const url=new URL("../icons/user-minus.svg?v=fd197a3adf27342d898fdd611ad2555a2ecfdfda3ae970ce7b468a9270e027d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
