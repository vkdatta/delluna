export const name="wifi_calling_bar_1";
export const id="dl_7c0e5b933592f26f9483";
export const url=new URL("../icons/wifi_calling_bar_1.svg?v=cf4800dec7669123716b24d446bfec1d9082e909608a5d6acd96713c53520ff7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
