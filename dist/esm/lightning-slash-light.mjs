export const name="lightning-slash-light";
export const id="dl_c7a69743716b45419420";
export const url=new URL("../icons/lightning-slash-light.svg?v=f85cf08f51b96d2f4930d55cdc87a39b3affdedfb0bb15b8589c6bb29bd68e66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
