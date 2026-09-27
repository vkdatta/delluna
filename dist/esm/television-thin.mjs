export const name="television-thin";
export const id="dl_0ee57ff97e94661b0111";
export const url=new URL("../icons/television-thin.svg?v=45eae2aca31a6215472d8664989fe37fe5dca0e5fe5ff9fd8ce16104d81f92be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
