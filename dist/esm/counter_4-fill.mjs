export const name="counter_4-fill";
export const id="dl_f0bf61a8175c077c0c27";
export const url=new URL("../icons/counter_4-fill.svg?v=d86b89f9e2e589519a1ccf05ac28637398fbfd0a005aa8c6109777973ada56cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
