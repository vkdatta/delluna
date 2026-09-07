export const name="speaker-simple-low-bold";
export const id="dl_602d9ca7bfac47a793e3";
export const url=new URL("../icons/S/speaker-simple-low-bold.svg?v=6de6d31a68ee152c4cdad7a803493321f70bcc2901a54233b516732c2ed799c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
