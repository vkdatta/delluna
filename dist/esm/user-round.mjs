export const name="user-round";
export const id="dl_94809bb65a2845c589ca";
export const url=new URL("../icons/user-round.svg?v=856d606cae1a5e9ed5baa0f1a08f5cdcbf4d89cdecdeb8383a2ebfd39a05ed9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
