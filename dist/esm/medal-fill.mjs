export const name="medal-fill";
export const id="dl_80df1827891a49ac9eb5";
export const url=new URL("../icons/medal-fill.svg?v=d472a47c50cfce96c6a8e03453f617c0c049833d4d357ca937d89b4472b7b6d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
