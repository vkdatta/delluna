export const name="stylus_pen";
export const id="dl_5739da3f4595c5dc67d7";
export const url=new URL("../icons/stylus_pen.svg?v=8de4bf60912e823196ab5f45cfb09f21c93beeb553c5366a9bf9d5b469867953",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
