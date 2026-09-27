export const name="smiley-angry";
export const id="dl_ae9a6e590efbaab39c14";
export const url=new URL("../icons/smiley-angry.svg?v=466af897ea730347cfe1f317ea7154a3b321edb689a0090c7b7c8de9ca57fd36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
