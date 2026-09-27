export const name="arrow-up-left-bold";
export const id="dl_dbe0837521e142e1ba0c";
export const url=new URL("../icons/arrow-up-left-bold.svg?v=11ce968e6aefcc35c1e8f1ddadb95527fc721247edff2758864ab58d45a6522a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
