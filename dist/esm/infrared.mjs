export const name="infrared";
export const id="dl_2cd447fe208098ec9701";
export const url=new URL("../icons/infrared.svg?v=87800b8776d19e628f422011023b0b97a3ab43eee6207c71c58be63c6df9ce25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
