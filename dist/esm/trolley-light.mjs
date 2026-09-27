export const name="trolley-light";
export const id="dl_7b9fb4b00857c14a3921";
export const url=new URL("../icons/trolley-light.svg?v=40d25f5a3141d4ff9206c5ac1122cae5252c28666c973ca06b4dacb44b67ead7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
