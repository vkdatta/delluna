export const name="circle-dashed-fill";
export const id="dl_d4608073cb594363a679";
export const url=new URL("../icons/circle-dashed-fill.svg?v=1e5eb95a0d25a28697c5f637187f29a30f9faf0636d51bd1fb5225cc3742ede2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
