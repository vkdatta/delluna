export const name="lucid_3-notebook";
export const id="dl_93b708f769ca4fa0adac";
export const url=new URL("../icons/lucid_3-notebook.svg?v=f4fbccfdf17187ac2944abbd10891588263d9dcd5956a866e55a8a16573f45b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
