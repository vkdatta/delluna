export const name="earbuds";
export const id="dl_67ccdd06f8df62186b0c";
export const url=new URL("../icons/earbuds.svg?v=483dfa348cfd04b6faac6e08320a640cc491611920932a7d8a4a9d6d53cb7b63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
