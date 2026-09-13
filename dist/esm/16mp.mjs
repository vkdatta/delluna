export const name="16mp";
export const id="dl_4faf083bbc8944c995d5";
export const url=new URL("../icons/1/16mp.svg?v=2110838784804af438ebf9370f01d933f6bc1fe73e90e5b0128291a4c3b3290b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
