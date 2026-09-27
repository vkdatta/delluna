export const name="lucid_3-rows-3";
export const id="dl_7eda0e258fea442cb9fe";
export const url=new URL("../icons/lucid_3-rows-3.svg?v=0fd1efb639e7044026d03e6986f1b788fd5f8ae20c23e368d544441f38bff2b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
