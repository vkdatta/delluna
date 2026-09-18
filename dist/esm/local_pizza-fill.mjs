export const name="local_pizza-fill";
export const id="dl_c146946334d54c20a6a3";
export const url=new URL("../icons/local_pizza-fill.svg?v=c5681761247b56bea5b1cf6b6e736c7e4d58c8288fe08269e1917fc4d59e985e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
