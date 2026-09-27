export const name="tumblr-logo-thin";
export const id="dl_bb55bc8257400058af83";
export const url=new URL("../icons/tumblr-logo-thin.svg?v=a61242c5bd8754bb7461de4ab389dc438c82cf8c2c5da73c46b79f31934a6db9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
