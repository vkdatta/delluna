export const name="shapes-thin";
export const id="dl_f7eb3df86d99c1ceb06b";
export const url=new URL("../icons/shapes-thin.svg?v=a13d8ef07b5ec504155c3996cd908524045a57dbe686a6ed63a800962653a364",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
