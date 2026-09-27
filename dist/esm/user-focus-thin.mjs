export const name="user-focus-thin";
export const id="dl_99e21d79c21522afbbf8";
export const url=new URL("../icons/user-focus-thin.svg?v=aede64aed1ab945525166321d265a785514af1f82c5dd6c143d6ba3212983ef5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
