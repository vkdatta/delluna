export const name="broom-duotone";
export const id="dl_d37eb4914fab4f10ab1d";
export const url=new URL("../icons/broom-duotone.svg?v=8c3c125b5b0000437c33b755414c9504cc25a00b1df9bc0d86f3cea4408d2ca8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
