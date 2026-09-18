export const name="send-fill";
export const id="dl_fefc7df588464c439001";
export const url=new URL("../icons/S/send-fill.svg?v=a9fda7df343ee0d585fa7b07172d1a6810924ed60fdaced906e2effa41b66a47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
