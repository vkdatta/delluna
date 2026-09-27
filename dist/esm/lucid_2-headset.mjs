export const name="lucid_2-headset";
export const id="dl_a7567e94afbb4daca79b";
export const url=new URL("../icons/lucid_2-headset.svg?v=eb7a82ec3063fd0612c6d97a6bc6b2ef5dc1d8122b9d9610df50f9cc15302e8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
