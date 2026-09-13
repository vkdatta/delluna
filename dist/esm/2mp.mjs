export const name="2mp";
export const id="dl_c0799d17b15746f3a0c1";
export const url=new URL("../icons/2/2mp.svg?v=7bdd48670928e5146c4abd465e52e4448bca8dff50a007b1f3bd5a6d7c3cdf31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
