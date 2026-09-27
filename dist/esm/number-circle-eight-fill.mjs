export const name="number-circle-eight-fill";
export const id="dl_971d7e8cd15548a7b21e";
export const url=new URL("../icons/number-circle-eight-fill.svg?v=870b7bf2952d96546dfa137257c556c0a54c37b249412c51055ffcd838826d74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
