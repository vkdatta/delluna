export const name="view_array-fill";
export const id="dl_f298cb2f163fff5ef280";
export const url=new URL("../icons/view_array-fill.svg?v=479d190dfdd21f1390f119b281b247dbf89b22dce875dacaec2914db232ff203",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
