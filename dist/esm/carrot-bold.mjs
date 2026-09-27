export const name="carrot-bold";
export const id="dl_9a98167496254b669bfa";
export const url=new URL("../icons/carrot-bold.svg?v=aac49498486e76aa796636efe80337807ec75e36b99411fb43a98aafb63cb0e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
