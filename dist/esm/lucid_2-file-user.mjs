export const name="lucid_2-file-user";
export const id="dl_7a76aa61c90b46798c6b";
export const url=new URL("../icons/lucid_2-file-user.svg?v=028d3fe201bdf44fdd75f11ddc866107c7cc54d936fed3fd2b6056cbdeff622b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
