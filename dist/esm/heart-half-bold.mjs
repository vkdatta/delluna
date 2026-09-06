export const name="heart-half-bold";
export const id="dl_af84151d31c14ced8765";
export const url=new URL("../icons/heart-half-bold.svg?v=ec33fcd823b80d8d89f740ec9bf3768272118bf63fee8a09bd20d4165794277c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
