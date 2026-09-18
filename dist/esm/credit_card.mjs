export const name="credit_card";
export const id="dl_08d0686069db42e09704";
export const url=new URL("../icons/credit_card.svg?v=ff13a2379606a63cbb86899d03ad01e37b8a543756bd0cf41ff657419dfaa00e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
