export const name="lucid_1-bean";
export const id="dl_b2c39b2de41d476cb28c";
export const url=new URL("../icons/lucid_1-bean.svg?v=758ae03809cbd2562e8b25142102bce2383476efed69d079e3a0ca7beb1cc990",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
