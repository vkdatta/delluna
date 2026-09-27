export const name="pencil-line-light";
export const id="dl_67f44b9891ee4e4998f7";
export const url=new URL("../icons/pencil-line-light.svg?v=eaac77aec152750a83764719dde50e60091876a6a06f16019bf098c7d682a142",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
