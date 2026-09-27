export const name="arrow-circle-down-right-light";
export const id="dl_6682a051e3f547fcadf5";
export const url=new URL("../icons/arrow-circle-down-right-light.svg?v=9db757e3f711624347241282115b6d72f624bf0500b7d9c186c32aa49264ddad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
