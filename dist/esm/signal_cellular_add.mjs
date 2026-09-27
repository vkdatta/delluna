export const name="signal_cellular_add";
export const id="dl_be2bf3bb36766ebfb963";
export const url=new URL("../icons/signal_cellular_add.svg?v=7f07313c2237278fb19726a044eead7fa94f9e076c54c8ea7df02f12e7e98662",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
