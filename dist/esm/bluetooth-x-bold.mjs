export const name="bluetooth-x-bold";
export const id="dl_5ea61418795f4ef5b643";
export const url=new URL("../icons/bluetooth-x-bold.svg?v=14a20543625e50631e7a68d476728c8a486c620731654eb64de09f7330bfbcbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
