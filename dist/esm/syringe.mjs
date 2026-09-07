export const name="syringe";
export const id="dl_7b659ab2f0c8471c9583";
export const url=new URL("../icons/S/syringe.svg?v=b249d7be5c84b89bae2d06e330702591313c2e1a8b99f413e46a1414d4ae5b64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
