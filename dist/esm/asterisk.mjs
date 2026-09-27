export const name="asterisk";
export const id="dl_fcbd30a5889f4244a7d2";
export const url=new URL("../icons/asterisk.svg?v=801149b95185d0405af95b47ac36202c344f9b0c1b5f181e33c73769ae524a69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
