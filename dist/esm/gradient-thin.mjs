export const name="gradient-thin";
export const id="dl_557ba3917d954e52b5f1";
export const url=new URL("../icons/gradient-thin.svg?v=850838cca682741c7cf061b6c5abea6f9d1da67480fe65d41320e5084471cab2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
