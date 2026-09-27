export const name="reddit-logo-light";
export const id="dl_4b04385980bd45908a0b";
export const url=new URL("../icons/reddit-logo-light.svg?v=2be20af917f1d14d209820feb5db483d176e60318f3b404199d0d9659d75d32b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
