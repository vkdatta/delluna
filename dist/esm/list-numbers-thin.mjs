export const name="list-numbers-thin";
export const id="dl_1fe844121fb54f22b1b7";
export const url=new URL("../icons/list-numbers-thin.svg?v=d458ff701be27251cc1421ac54293336fdfc3a8988e82715a71642e1455319e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
