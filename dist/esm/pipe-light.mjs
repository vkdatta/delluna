export const name="pipe-light";
export const id="dl_8b49415d827d49ccb5fe";
export const url=new URL("../icons/pipe-light.svg?v=31c7e865a015ab08be60b58bbb750d94754a234538e2ba38b90158e6aa4cefa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
