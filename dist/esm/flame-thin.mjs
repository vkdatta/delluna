export const name="flame-thin";
export const id="dl_263c48372b38482284f7";
export const url=new URL("../icons/flame-thin.svg?v=8199f5dc39484ba6dd564e03e587bd721af4980fb70b6e18e08bab80238e5b2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
