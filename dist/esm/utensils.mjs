export const name="utensils";
export const id="dl_6f26f1443cf24a509ac2";
export const url=new URL("../icons/utensils.svg?v=ee7b10c75c4080329631346e365c16a15de252238247db0c871f67e8bc5d8154",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
