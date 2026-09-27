export const name="trolley-suitcase-thin";
export const id="dl_e1613165c2226dfbd0a8";
export const url=new URL("../icons/trolley-suitcase-thin.svg?v=2e878d7c54a5a3e8a35e3bdde5d9c287ff26f7ea7cf6a1f892d455a702839133",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
