export const name="graphics-card-bold";
export const id="dl_95c5d90b5e394155a4e1";
export const url=new URL("../icons/graphics-card-bold.svg?v=3f8dce5aa4664fac68153e8674e19b86fbb170bcec2cbc6e6f065ea7db5edd6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
