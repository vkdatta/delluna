export const name="arrow-fat-lines-down-thin";
export const id="dl_dee93bbf77d34218bc1f";
export const url=new URL("../icons/arrow-fat-lines-down-thin.svg?v=392d1d8cc1c82f53f85e3807b05013aa147cc158d74e564cd4509cd85347912a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
