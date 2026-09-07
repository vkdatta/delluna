export const name="vector-two-thin";
export const id="dl_1e8f5c18f8b244478900";
export const url=new URL("../icons/V/vector-two-thin.svg?v=48c658b777ff7a8c171a5e068da30779c17ab8061780667f070d1ae00e2c5ffe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
