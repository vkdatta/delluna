export const name="linux-logo-thin";
export const id="dl_7584c7204f0e480b9273";
export const url=new URL("../icons/linux-logo-thin.svg?v=8051fd3fd9c0c78e243fa6decadb5a2268682b201326feee0835687a9814f7af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
