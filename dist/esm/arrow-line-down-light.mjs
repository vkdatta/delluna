export const name="arrow-line-down-light";
export const id="dl_93ce2fd069d14e69b8c0";
export const url=new URL("../icons/arrow-line-down-light.svg?v=ba6e69a2ccda9d7935db17feeb16d05f7ec925dbaf6d29b964237e1d95b4e7da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
