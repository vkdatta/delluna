export const name="train-light";
export const id="dl_8529cc81665979826f77";
export const url=new URL("../icons/train-light.svg?v=7a12f55caf1df936965c55d757fd51ed29e56143a04c7ebc2ce8a5a8fb4b5265",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
