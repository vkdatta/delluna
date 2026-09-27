export const name="browsers-fill";
export const id="dl_8b7a028fb7bf4289b701";
export const url=new URL("../icons/browsers-fill.svg?v=7872330e2c81528f5cb8c657a22af629040152f1e717d2b943686d0aafaf5008",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
