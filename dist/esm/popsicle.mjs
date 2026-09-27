export const name="popsicle";
export const id="dl_f0284a2ef00647358da1";
export const url=new URL("../icons/popsicle.svg?v=7b3e5dc36dd803471231c23fb75b7953db564e27e4a2f6016e305cb2cc54a344",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
