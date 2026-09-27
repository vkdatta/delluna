export const name="wheelchair-thin";
export const id="dl_7fd224af64ce0eb388d6";
export const url=new URL("../icons/wheelchair-thin.svg?v=691b3c5c2e8412286e8d131f6dde0022f45bfbf11f79c1d389c35b62c39af1f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
