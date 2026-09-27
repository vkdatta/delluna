export const name="eco";
export const id="dl_6c4c5d01ea08446e6193";
export const url=new URL("../icons/eco.svg?v=a0d6274d2077700c6a97325431e04ee761ea8f7acc8c66194f74d2ae2269f1fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
