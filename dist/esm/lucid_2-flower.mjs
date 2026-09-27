export const name="lucid_2-flower";
export const id="dl_d4a8461950ae46fc8235";
export const url=new URL("../icons/lucid_2-flower.svg?v=17a0d9b713028085582bc47f3b0f74b5505060eaea8d171f7103fbfceba7e297",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
