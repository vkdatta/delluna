export const name="undereye";
export const id="dl_daa7f08ea3e8a005b19c";
export const url=new URL("../icons/undereye.svg?v=3460b1df87e7fb86fe8c877a09b103546327e49ef54786afa419c32f7af0db78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
