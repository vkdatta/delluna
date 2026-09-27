export const name="list";
export const id="dl_ee7a5ba65441414abec5";
export const url=new URL("../icons/list.svg?v=21a23138222fd8fd8cae1cf09fc6ba17cbc5937c75b9645d7e9b5252a73e4f1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
