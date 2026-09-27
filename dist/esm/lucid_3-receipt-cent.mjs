export const name="lucid_3-receipt-cent";
export const id="dl_f38228bd3b9946199386";
export const url=new URL("../icons/lucid_3-receipt-cent.svg?v=7a27872d2a28a95a8cd7e965e055f9bef7c458ad5c786cdd07075cd412b61ef5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
