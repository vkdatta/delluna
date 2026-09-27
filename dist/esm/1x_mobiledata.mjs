export const name="1x_mobiledata";
export const id="dl_aeb256cd30e33a8faab5";
export const url=new URL("../icons/1x_mobiledata.svg?v=04089f5f9a376edc18b68a2ee0566bdc86acfb75f8169d7b6769348ece1e34bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
