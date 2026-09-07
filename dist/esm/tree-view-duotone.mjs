export const name="tree-view-duotone";
export const id="dl_20dcfb787a094de0a4a6";
export const url=new URL("../icons/T/tree-view-duotone.svg?v=e26c157edc729c794fcd8c7668ea4ca93f1b6a48f2ff095965bd570f2befe4e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
