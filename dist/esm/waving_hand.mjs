export const name="waving_hand";
export const id="dl_0dbea12422d20095344e";
export const url=new URL("../icons/waving_hand.svg?v=65246e0fa9fd6a750f8977cad24eeaf4e2ffd9bc886c365db36415e4bb10e70e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
