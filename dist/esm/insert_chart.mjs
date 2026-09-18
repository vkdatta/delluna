export const name="insert_chart";
export const id="dl_bf5cd5e7b05d409b8e81";
export const url=new URL("../icons/insert_chart.svg?v=287cfd38d80f2773e02af6c818986dd3a714785b5ff530e04c14c5853c1a358a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
