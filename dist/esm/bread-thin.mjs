export const name="bread-thin";
export const id="dl_f79c5b68902c45869403";
export const url=new URL("../icons/bread-thin.svg?v=3e0604c6a6ba5928e89286176b6befe63a7d7ed85c8495580764c0b20b646bb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
