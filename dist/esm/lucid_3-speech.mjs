export const name="lucid_3-speech";
export const id="dl_51afc2728d3a482088c1";
export const url=new URL("../icons/lucid_3-speech.svg?v=491f90786b9ec18fbcc8b66f9e9d3f2b76b048784f89ceed1dd4127b52a3b73e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
