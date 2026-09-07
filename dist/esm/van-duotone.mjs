export const name="van-duotone";
export const id="dl_d763a8e54ee549f7ab17";
export const url=new URL("../icons/V/van-duotone.svg?v=937118f1afdf5f108b0d85305ad47278fe71f502fec33913bc53e29c8cef8212",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
