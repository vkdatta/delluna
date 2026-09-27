export const name="money-thin";
export const id="dl_ca27e4eac7c642d6b45f";
export const url=new URL("../icons/money-thin.svg?v=7e146421f52a501150998223ba47dc85b40a13ef5ebee05a5bfbb86aefbc7b54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
