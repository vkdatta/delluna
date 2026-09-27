export const name="arrows-in-line-horizontal-thin";
export const id="dl_5ca167d75b344ceb9bd3";
export const url=new URL("../icons/arrows-in-line-horizontal-thin.svg?v=a7614ff1801d1a5e732410b5b4b0247d641dfc76a659737cd54b9b24f04809b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
