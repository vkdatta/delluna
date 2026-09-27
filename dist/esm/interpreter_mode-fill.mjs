export const name="interpreter_mode-fill";
export const id="dl_d16525bccbae290263e9";
export const url=new URL("../icons/interpreter_mode-fill.svg?v=74c28e50085a4f39941ccec45ecc5a203550cda594f0ede3a059e8a1484471e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
