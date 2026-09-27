export const name="box-arrow-up-thin";
export const id="dl_c1abf4b351244837ab6b";
export const url=new URL("../icons/box-arrow-up-thin.svg?v=c0901868319505af47a0c5cbee9e779865775b4b411fb7199e26c331d393a099",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
