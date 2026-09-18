export const name="train-fill";
export const id="dl_e12cf7883d2145aabc16";
export const url=new URL("../icons/T/train-fill.svg?v=40d5bc0937856f440baaf46033ee7223ca2cc0f26f86dfa05a065ef227b854c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
