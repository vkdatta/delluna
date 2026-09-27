export const name="smiley-angry-light";
export const id="dl_a4e043883375de3cd193";
export const url=new URL("../icons/smiley-angry-light.svg?v=c1a5b264478b097f7fa63c8595c9de2daa74fd5086fc507920dbfb410b73f922",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
