export const name="waves-thin";
export const id="dl_482a7816705149aca1fc";
export const url=new URL("../icons/W/waves-thin.svg?v=7b5cd3e50954e2a9455023a995865162d35e294496b80bdf79c830e1cfa52cc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
