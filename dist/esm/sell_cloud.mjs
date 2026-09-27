export const name="sell_cloud";
export const id="dl_779b9807e64de80353e7";
export const url=new URL("../icons/sell_cloud.svg?v=927c465b1b8081b425080ba0ea64098da5270700620567bf2ff63dbe30958764",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
