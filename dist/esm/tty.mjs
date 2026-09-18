export const name="tty";
export const id="dl_c6848b73d2cd485db4a9";
export const url=new URL("../icons/T/tty.svg?v=57c0b593d4924e5e79ab44b0a69b3f2f60580988d14314a0253ffbe6176186ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
