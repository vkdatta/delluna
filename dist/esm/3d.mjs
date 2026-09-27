export const name="3d";
export const id="dl_9b70058a41f6c9b67d33";
export const url=new URL("../icons/3d.svg?v=e13d917c0614fe6495dfe700a325035c18906c9998f060e94462801422c38ba7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
