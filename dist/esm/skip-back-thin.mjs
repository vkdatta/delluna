export const name="skip-back-thin";
export const id="dl_189dd32464a0794d7e0f";
export const url=new URL("../icons/skip-back-thin.svg?v=7081a21ec5b05754f9b51a9bbf0ab9b24c51b96a4e153b68ea81e92997f223be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
