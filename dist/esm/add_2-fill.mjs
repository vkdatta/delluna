export const name="add_2-fill";
export const id="dl_07e10cbf9ce09b73cdab";
export const url=new URL("../icons/add_2-fill.svg?v=049b1ada3b06deeeaa958e2b84eda2f9e1339daf23c274c9caab11123f0d3473",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
