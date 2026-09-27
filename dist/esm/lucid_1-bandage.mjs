export const name="lucid_1-bandage";
export const id="dl_225203fad7374780bbbc";
export const url=new URL("../icons/lucid_1-bandage.svg?v=54b61ca872b4830b633481331015f93e19c1e65bf562763d3787908e00daccc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
