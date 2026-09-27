export const name="arrow-bend-left-up-light";
export const id="dl_038736d63dfb4d148b61";
export const url=new URL("../icons/arrow-bend-left-up-light.svg?v=b483400a9170bb1822c338e78ee667273fbe98bfcbb7cbe35f8b8988ff96cb36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
