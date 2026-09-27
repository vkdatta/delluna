export const name="signal_disconnected-fill";
export const id="dl_790efbcb93d50bcda9c7";
export const url=new URL("../icons/signal_disconnected-fill.svg?v=6b72b765c98891e76ecff163383cda28e00aead3793277097f1d7f907cd0d971",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
