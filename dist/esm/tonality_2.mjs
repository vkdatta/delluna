export const name="tonality_2";
export const id="dl_46b9b12f608e4d1680f4";
export const url=new URL("../icons/tonality_2.svg?v=6571ac360464ae429ddb502fb26f598d6bbde9adba2944c94e009f73c851e518",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
