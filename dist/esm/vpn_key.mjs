export const name="vpn_key";
export const id="dl_578d3a611b51de6e4799";
export const url=new URL("../icons/vpn_key.svg?v=c70672b8dcfb9ac4d80388c129a76bf243d55017c359123a47647df94b6d2ddf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
