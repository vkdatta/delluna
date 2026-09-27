export const name="castle-turret-light";
export const id="dl_7fd2e4db689947819bc3";
export const url=new URL("../icons/castle-turret-light.svg?v=4cea3a199af9527be790cdce2ca69694fa0395a528ab5744fa71aa6c910f8f5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
