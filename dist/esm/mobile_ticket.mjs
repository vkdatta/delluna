export const name="mobile_ticket";
export const id="dl_afd8e59783da7e089a0f";
export const url=new URL("../icons/mobile_ticket.svg?v=89d8f757b067fc336c3735c40c052e3dbeb15ce55e30b2b4fc908dd948cbac2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
