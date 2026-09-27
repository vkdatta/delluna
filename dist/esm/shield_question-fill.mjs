export const name="shield_question-fill";
export const id="dl_ff7ebd611f395fc9e1fa";
export const url=new URL("../icons/shield_question-fill.svg?v=51d087aa9db0224508f9d9511ccb78a973b9b0ac82968938ae88c32521045561",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
