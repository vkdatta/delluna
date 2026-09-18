export const name="hourglass_pause";
export const id="dl_43f9ddbed2844e35bccf";
export const url=new URL("../icons/hourglass_pause.svg?v=0850dd14d8fb30b1d1ccb1bc3b8c47ac5b8f24aa9b27611b87138284894cb224",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
