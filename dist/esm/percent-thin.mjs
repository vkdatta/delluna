export const name="percent-thin";
export const id="dl_1ad03125da5940b793b4";
export const url=new URL("../icons/percent-thin.svg?v=fbc49b03e7f616e27727897cd3fe06a16187c3314b90c8fa904510f7c91a6ecc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
