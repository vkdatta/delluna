export const name="tip-jar";
export const id="dl_f52b5eb7d128443795a9";
export const url=new URL("../icons/T/tip-jar.svg?v=f345b47e341ea832b9ea583d953d0b06e0558a383eec3ee81a4a14c14525c8eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
