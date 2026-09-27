export const name="codepen-logo";
export const id="dl_39b8fc17860c409aae33";
export const url=new URL("../icons/codepen-logo.svg?v=94495c952f5c9dfea61d287e09986786aa3b189b660731d5321a1355bcacf757",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
