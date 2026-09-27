export const name="ramen_dining";
export const id="dl_d9d522147421a3fff19e";
export const url=new URL("../icons/ramen_dining.svg?v=d29abdec5ed11a36e0c02d8e950786bb65623929f808287e7129666564f0e6bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
