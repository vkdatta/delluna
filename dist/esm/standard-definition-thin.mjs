export const name="standard-definition-thin";
export const id="dl_ab950a0f31421d5c432f";
export const url=new URL("../icons/standard-definition-thin.svg?v=b13114a08fe8a03955ea187c5da2555aa678172c045a33598a5b84f115aedf41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
