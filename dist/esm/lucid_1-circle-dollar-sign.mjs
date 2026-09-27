export const name="lucid_1-circle-dollar-sign";
export const id="dl_ef1c0fcacdc94e969ca1";
export const url=new URL("../icons/lucid_1-circle-dollar-sign.svg?v=2f792bd92b321d21c21f0a9943f33596177b9767844e77b69f59bde5188e9d0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
