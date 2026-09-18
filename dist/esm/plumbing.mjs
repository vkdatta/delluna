export const name="plumbing";
export const id="dl_3524030d5b2f449e826a";
export const url=new URL("../icons/plumbing.svg?v=c0eeef27e72bd730a98df240deabf0a91de13af63c3035481b824491ac786d4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
