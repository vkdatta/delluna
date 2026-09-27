export const name="nest_doorbell_visitor";
export const id="dl_61138a2f70cc7979a71a";
export const url=new URL("../icons/nest_doorbell_visitor.svg?v=6b97e13ccfa168fd0b55b2202433c4692441048dc05dce9d4dd8429e1be39492",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
