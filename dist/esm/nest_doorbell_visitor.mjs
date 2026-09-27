export const name="nest_doorbell_visitor";
export const id="dl_c480cd4243599b21337b";
export const url=new URL("../icons/nest_doorbell_visitor.svg?v=ed76b3cfa458b92c1ded8e967f6fdaced37c5a57696e5f932e76349c8b1cb359",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
