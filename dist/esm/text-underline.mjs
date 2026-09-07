export const name="text-underline";
export const id="dl_bbcd1426bea948d4b576";
export const url=new URL("../icons/T/text-underline.svg?v=31739d959bc52b6d0384d2a878145b130107a94c2dc84e1da9aa9f1370581cfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
