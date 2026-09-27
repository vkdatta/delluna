export const name="beer-stein-thin";
export const id="dl_807a3aa6de324fb19685";
export const url=new URL("../icons/beer-stein-thin.svg?v=27e62d9555871b25c716130fa8fd76fb1301ea7e2a094c390b1843241b6c9a0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
