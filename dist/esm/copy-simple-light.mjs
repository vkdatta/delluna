export const name="copy-simple-light";
export const id="dl_295fd1d7b4ec48b186f6";
export const url=new URL("../icons/copy-simple-light.svg?v=800a21882b270db7a0ac2d8fb778a7dd66326d9ce26629f1edc39fbbabd0d0b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
