export const name="faders-light";
export const id="dl_7f619f1d5cb44850983e";
export const url=new URL("../icons/faders-light.svg?v=4c15a7e40241c254dcf60783be054a3ceefa74266986ffae38d7ce279e7b9c34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
