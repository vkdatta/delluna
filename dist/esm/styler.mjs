export const name="styler";
export const id="dl_6b7d57adec8bae5aced7";
export const url=new URL("../icons/styler.svg?v=ebe455d45782932a6a51d7c8b5ad2e4cc30c89096fb14f23edfbd72d2e541caf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
