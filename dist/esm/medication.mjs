export const name="medication";
export const id="dl_ffa7391a35815090a190";
export const url=new URL("../icons/medication.svg?v=4e21f028e825cbbc3437a000fda53e5bc9bd15c8ae757398eb748f420e9c43b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
