export const name="prompt_suggestion";
export const id="dl_38bd77d2e1db49129982";
export const url=new URL("../icons/P/prompt_suggestion.svg?v=04ce1627ce35c23a877b622542c45fd5343766f6cce6c078994c2ca1f17768ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
