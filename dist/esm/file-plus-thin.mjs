export const name="file-plus-thin";
export const id="dl_1e68888d813d409f9d14";
export const url=new URL("../icons/file-plus-thin.svg?v=40310caf426b3743e79d011e96541e74f1b0eeb49cb57ae1cbd722109ebc6cf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
