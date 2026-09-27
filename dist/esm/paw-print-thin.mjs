export const name="paw-print-thin";
export const id="dl_80c25273a0c14fc69864";
export const url=new URL("../icons/paw-print-thin.svg?v=95a1af1466601139bc53f233fc8d50fbc94fd5cc94376b8ef322ac3b672fbb4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
