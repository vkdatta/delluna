export const name="ticket-x";
export const id="dl_94e2ba5e6e934e6898f6";
export const url=new URL("../icons/ticket-x.svg?v=90352f11cde7e72ee2ee239fe3209e8c5f57bc1a729345d12673c2a2b3c0d6a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
