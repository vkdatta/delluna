export const name="file-jsx";
export const id="dl_afa8307b954844cd99d8";
export const url=new URL("../icons/file-jsx.svg?v=6bc637683e0edeb8b516edeab8e1ba2e2c8635f411035d4b9f88d1ad9fc5a1f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
