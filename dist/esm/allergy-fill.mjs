export const name="allergy-fill";
export const id="dl_c598ada6af2fb2ab7bf1";
export const url=new URL("../icons/allergy-fill.svg?v=fb5c8a5aa4a90db2fc3fe2338dd18dd366c85dfa8dc9c0ddc00fd131dbff27ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
