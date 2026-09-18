export const name="table_view";
export const id="dl_f80cae27ed104ede93e3";
export const url=new URL("../icons/T/table_view.svg?v=c4bc537e7e5b9fa6d76abfd57292a38f3d98d5159e162229ffdc9a904a8ece19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
