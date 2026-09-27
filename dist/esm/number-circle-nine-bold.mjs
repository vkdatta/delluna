export const name="number-circle-nine-bold";
export const id="dl_12ee073e949b461aaeca";
export const url=new URL("../icons/number-circle-nine-bold.svg?v=6ed6e503aed4523e3a2c518a68e2f03a88c5c4bcc2beac7f4cbd408d82602bbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
