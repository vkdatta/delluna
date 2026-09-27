export const name="train-bold";
export const id="dl_104ff3914bcb39bd8a68";
export const url=new URL("../icons/train-bold.svg?v=026677c3bb0e01628c3feb3fc22e24b0198e827f0d4c5037f4dd944a0a679a70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
