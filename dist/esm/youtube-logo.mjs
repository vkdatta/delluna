export const name="youtube-logo";
export const id="dl_1c93ca3182197dceb246";
export const url=new URL("../icons/youtube-logo.svg?v=eaaf4b336ca9511addc9cc88c40d992db6f707bf3f2c9e9e2745f1de02f1da8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
