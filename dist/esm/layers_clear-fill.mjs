export const name="layers_clear-fill";
export const id="dl_648f8cdf1954b4ca2866";
export const url=new URL("../icons/layers_clear-fill.svg?v=f7a52331dfbb6bac8c433bf80f92fb7b85dbc274f08a8f041f006f3e6a1a066a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
