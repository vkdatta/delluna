export const name="asterisk-simple";
export const id="dl_7a94d1397ea148188587";
export const url=new URL("../icons/asterisk-simple.svg?v=a418537b177fd36ed86db494a983785fbf0c4f1596b722d247d99a797a9149f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
