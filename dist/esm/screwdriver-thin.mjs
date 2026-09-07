export const name="screwdriver-thin";
export const id="dl_3c5608c2fc734d90aafd";
export const url=new URL("../icons/S/screwdriver-thin.svg?v=165f803023920c41e446b265d3015316a7f6208d2ba4d6af0b3d063ec5f075d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
