export const name="5k_plus";
export const id="dl_4aaaa83537f4aea638a2";
export const url=new URL("../icons/5k_plus.svg?v=311f0aceaee97de61bd04b3f1c44ac8a9fb2a33542a20a45d1000f38d61b2ad2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
