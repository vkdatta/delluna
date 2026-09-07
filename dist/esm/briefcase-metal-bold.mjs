export const name="briefcase-metal-bold";
export const id="dl_ac6479efb5e445a88988";
export const url=new URL("../icons/briefcase-metal-bold.svg?v=195c5c2e363ad7a9a20145f1569163d57e46a7ad54f537074af4cfc5a4873522",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
