export const name="auto_transmission";
export const id="dl_1aa8c881d479383a7aa2";
export const url=new URL("../icons/auto_transmission.svg?v=b9a212ec27ca91a0622b709e73f515134b12b91f0b0209a55e1bc1688e7a6d42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
