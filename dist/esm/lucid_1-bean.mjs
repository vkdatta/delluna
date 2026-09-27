export const name="lucid_1-bean";
export const id="dl_b2c39b2de41d476cb28c";
export const url=new URL("../icons/lucid_1-bean.svg?v=d019b5f97af8b37df02d313475426edd6302d4efdb2c91918c58bd80ec7b4fc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
