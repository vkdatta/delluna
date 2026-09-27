export const name="html";
export const id="dl_532952e79cc87a4b5c8d";
export const url=new URL("../icons/html.svg?v=1040bd25a1e20d54dbeec7f2c8060e84d65fb7bba520d292d9bfdf2584d3d302",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
