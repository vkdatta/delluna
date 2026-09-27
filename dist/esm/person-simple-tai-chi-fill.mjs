export const name="person-simple-tai-chi-fill";
export const id="dl_0a867ae8365347f88010";
export const url=new URL("../icons/person-simple-tai-chi-fill.svg?v=de036cda6532de1ad0e67985c8eb4978b77325b7563c174247f18005d1b72674",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
