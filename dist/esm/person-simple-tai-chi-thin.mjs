export const name="person-simple-tai-chi-thin";
export const id="dl_db9d9a3313b043d8ae6e";
export const url=new URL("../icons/person-simple-tai-chi-thin.svg?v=d230f04fd8ed2aec1c5e99d8d600eb6343a1589b512c88cbe82a736372aa596d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
