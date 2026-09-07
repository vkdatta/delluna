export const name="yarn-thin";
export const id="dl_6d33fe23c7f7466ca392";
export const url=new URL("../icons/Y/yarn-thin.svg?v=fbcb8cc0e08bd53aa352dd16e84efd9ed1d3a99a9f90ccaad179645349d754c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
