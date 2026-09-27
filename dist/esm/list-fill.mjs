export const name="list-fill";
export const id="dl_e5b11b2013564272b5c0";
export const url=new URL("../icons/list-fill.svg?v=37de467a8eda4623697a5adca99b5eedbda596dc8e56ceacbe66c461b437e6a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
