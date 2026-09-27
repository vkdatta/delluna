export const name="anchor-simple-light";
export const id="dl_6973ad4c38f74f69b472";
export const url=new URL("../icons/anchor-simple-light.svg?v=ec9803cc1ed556090726aa64114921aa2d523aa3edd9f62044c4b311a6ae18f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
