export const name="ticket-x";
export const id="dl_94e2ba5e6e934e6898f6";
export const url=new URL("../icons/ticket-x.svg?v=1f6c56c831eeb342daf2f491cfc4b953f47638c6fbd28e70278f93beb39c23aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
