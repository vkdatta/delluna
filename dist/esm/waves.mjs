export const name="waves";
export const id="dl_7c66657916481f8d275b";
export const url=new URL("../icons/waves.svg?v=6e527ea006619e47cb2f3d3348f7e290bd8caba58f1dea4ab68e7f26c98e99de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
