export const name="file-jsx";
export const id="dl_afa8307b954844cd99d8";
export const url=new URL("../icons/file-jsx.svg?v=b2561dd92361a3f383e9af76680d57e45661d12157b75ddcb3d7b68b918506f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
