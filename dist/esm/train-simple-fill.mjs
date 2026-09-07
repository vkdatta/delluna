export const name="train-simple-fill";
export const id="dl_cfb18a3be09242fa8a52";
export const url=new URL("../icons/T/train-simple-fill.svg?v=815252bc774ec19e47eef2e75f76e64fce43831a27e3e62a4ab95d7a6dceb2d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
