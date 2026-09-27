export const name="computer_cancel-fill";
export const id="dl_2773d702896ef52f8c8e";
export const url=new URL("../icons/computer_cancel-fill.svg?v=d41cd17f890d046ce8ea54b7d9d569a631319110f9781515a1daf4b6c13a2adf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
