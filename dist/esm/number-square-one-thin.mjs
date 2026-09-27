export const name="number-square-one-thin";
export const id="dl_9156b0aa0fa648439d92";
export const url=new URL("../icons/number-square-one-thin.svg?v=fbb8f82d66cc27ebe54e8aaca2d59f61c900d131967636fe2ab2af24f05e04c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
