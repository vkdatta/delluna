export const name="hand-peace-bold";
export const id="dl_28a7240a84ae4dfca5d7";
export const url=new URL("../icons/hand-peace-bold.svg?v=2dcbfef110c1d8b1252eedc3b71d8a579296d700d6292daa3648189b14fd2c36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
