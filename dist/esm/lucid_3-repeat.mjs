export const name="lucid_3-repeat";
export const id="dl_f225569790574796a701";
export const url=new URL("../icons/lucid_3-repeat.svg?v=2b84bb5653b262650e8d68cacb92eb624af02b8ca1f7f2897843d582a2fb43bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
