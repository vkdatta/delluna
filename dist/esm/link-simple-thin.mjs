export const name="link-simple-thin";
export const id="dl_0db9c2237c5844af979f";
export const url=new URL("../icons/link-simple-thin.svg?v=39085757923b3bd500a66698ee5723536b89f7448ac0dcdf4333da5c95dfeeda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
