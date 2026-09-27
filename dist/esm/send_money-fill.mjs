export const name="send_money-fill";
export const id="dl_b53b769bcc82db43ae82";
export const url=new URL("../icons/send_money-fill.svg?v=d457698fc1bd21c6c3732a85fe3b303f206612d0727e001adf938a35e6c285c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
