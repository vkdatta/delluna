export const name="gear-fine-thin";
export const id="dl_6f20a27c591140e8949e";
export const url=new URL("../icons/gear-fine-thin.svg?v=baca65c63ae4542b235b30b1034f9856fb4b52f843a802ea99566e52cbacae55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
