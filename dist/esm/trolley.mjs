export const name="trolley";
export const id="dl_af4f082afb8945e4bf70";
export const url=new URL("../icons/trolley.svg?v=b60e29d87764635608e7994ba104b4156931681a8c29bbedcfc1756be7dcee30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
