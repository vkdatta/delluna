export const name="safety_check_off";
export const id="dl_c5bc737af0a2e05ad702";
export const url=new URL("../icons/safety_check_off.svg?v=c65d44e28eb5ebdf46724fb46073153412d4729a9459547e9955db035203dabf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
