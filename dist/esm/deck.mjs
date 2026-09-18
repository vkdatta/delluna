export const name="deck";
export const id="dl_c54185f0dc824614bfe2";
export const url=new URL("../icons/deck.svg?v=f92eb9a46b3ee0f61c7e37858cfddc13ed6d889e2e125e009219ca4e80ff23da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
