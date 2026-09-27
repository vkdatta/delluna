export const name="warning-octagon-thin";
export const id="dl_be15f549afa2a9bce371";
export const url=new URL("../icons/warning-octagon-thin.svg?v=575d591803c6d462f89c157b7764ef736921a4f5e785c158ba3b7926e9710405",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
