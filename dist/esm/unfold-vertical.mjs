export const name="unfold-vertical";
export const id="dl_78d888718edf4d18810f";
export const url=new URL("../icons/unfold-vertical.svg?v=c2ba3dde3883913b39ceadfadc003c5a6e5572ed3551d343eb2e42911742424f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
