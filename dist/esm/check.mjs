export const name="check";
export const id="dl_5908cb5a33b24c738a18";
export const url=new URL("../icons/check.svg?v=8dd8a63a948b033c42c7891149fa0683bb32880b7240dbee7cb4a4ffe83af40d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
