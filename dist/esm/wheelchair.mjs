export const name="wheelchair";
export const id="dl_6de3bdcfa6beafc611a2";
export const url=new URL("../icons/wheelchair.svg?v=9d9cc34ebbcb9f64229db76f6c627993fc575242d4a2f2c4dda1d2b7e09911e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
