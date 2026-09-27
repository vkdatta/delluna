export const name="bedroom_child-fill";
export const id="dl_a631231682f1bed8401f";
export const url=new URL("../icons/bedroom_child-fill.svg?v=cae8632f1a6fd1dec6b2bd9d18f5aad69524c244d1d42c44e2e94f62d75a6253",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
