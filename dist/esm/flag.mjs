export const name="flag";
export const id="dl_d642370cd27347bbb991";
export const url=new URL("../icons/flag.svg?v=b3ae060e28d28ed1691406020a20bd052553c3970d457502dac58bd3ddb9fd07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
