export const name="bath_bedrock-fill";
export const id="dl_70b8a3edf808557e3352";
export const url=new URL("../icons/bath_bedrock-fill.svg?v=5a5ba5fe86f070d8a0f22e1348b4f1d4cea9b8ba4997da650d1d56fc97c7f5ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
