export const name="clipboard-text-light";
export const id="dl_0540c8a56d3442299dae";
export const url=new URL("../icons/clipboard-text-light.svg?v=49d61a54df99803c3c27e33f0fc58e3bbf1e470898592c6a465fae388deb0a15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
