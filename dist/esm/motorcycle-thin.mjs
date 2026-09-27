export const name="motorcycle-thin";
export const id="dl_273fa777083f49a5b8f4";
export const url=new URL("../icons/motorcycle-thin.svg?v=6ec9044f39a62eebccd8057580c9c46178ebf464e7802b3309e0af5da9deb51e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
