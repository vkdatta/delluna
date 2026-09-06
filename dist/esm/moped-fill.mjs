export const name="moped-fill";
export const id="dl_6c44738096e6483590c8";
export const url=new URL("../icons/moped-fill.svg?v=50a4f7a6283057c71004d9aa9892efb1e51531fbef9dde2614e3ebed3919ca4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
