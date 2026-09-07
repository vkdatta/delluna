export const name="ticket-fill";
export const id="dl_a1c3f4e8fbe442648ec4";
export const url=new URL("../icons/T/ticket-fill.svg?v=05d5f1f92438ec68001c936f5c6c9bd6a95aa2719b6ad61e499be4733960353d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
