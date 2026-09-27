export const name="pageless-fill";
export const id="dl_460b9c852fa448017e82";
export const url=new URL("../icons/pageless-fill.svg?v=85c58e1566db18ed97baef45a83c5b95aaac18f286f6102bd9aff2d3cfc77058",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
