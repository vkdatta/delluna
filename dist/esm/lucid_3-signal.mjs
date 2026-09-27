export const name="lucid_3-signal";
export const id="dl_cc91d2f3f6ca4e4c8f51";
export const url=new URL("../icons/lucid_3-signal.svg?v=28e7da4346ec1a273d06dbb05b89729ad1576a9ec18afd4aa0737be525cdac38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
