export const name="punch_clock";
export const id="dl_2a32e7c36a539d70bc25";
export const url=new URL("../icons/punch_clock.svg?v=f1a4b56deee8c42966961d7d7710c0076a9cb86bdac6e4b1a54d5d2d93aa214a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
