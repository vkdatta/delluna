export const name="circle-cross";
export const id="dl_22dccd2d0d53912e8548";
export const url=new URL("../icons/circle-cross.svg?v=89710a3dd8a60829e5a0079b374e12c0098e5083fdcb0e8ada9655e968581c04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
