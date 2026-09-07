export const name="lucid_3-message-square-x";
export const id="dl_71493871eca447848666";
export const url=new URL("../icons/lucid_3-message-square-x.svg?v=007b4258633c883e25a183491801baf7dfbcac17ee91375220682fee29facede",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
