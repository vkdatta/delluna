export const name="notches-thin";
export const id="dl_0656c94e888145eb8684";
export const url=new URL("../icons/notches-thin.svg?v=fcfa42f634617f8499ac6129513484935dd6efe6352ebf930c3b60c84cc5039f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
