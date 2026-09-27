export const name="text-h-four";
export const id="dl_838e937484f2274a7bf2";
export const url=new URL("../icons/text-h-four.svg?v=23d902713a6262cba0a3bacfafdb0375a854227d8e33c0fc354b4a440949f021",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
