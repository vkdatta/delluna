export const name="lucid_1-align-center-horizontal";
export const id="dl_0d858d77d4c54dfc81bc";
export const url=new URL("../icons/lucid_1-align-center-horizontal.svg?v=f3976e569e780e7f5afb3b97b27725f0b2b785c959ac892195007db214aca43b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
