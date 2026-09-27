export const name="layout-light";
export const id="dl_968aea07aba942d99850";
export const url=new URL("../icons/layout-light.svg?v=c075409d28b530aa6ee7399be6de1e6f76388eae264fe968f0957d4ef8460700",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
