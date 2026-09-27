export const name="pencil-line";
export const id="dl_d2e146e7bbc349f09e1e";
export const url=new URL("../icons/pencil-line.svg?v=0a5e2406f7995c9cbdf9d27c977d82ae04e173b0ac5cfb8b3f73ae54f35d777d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
