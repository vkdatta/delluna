export const name="suitcase-simple-thin";
export const id="dl_ac558ab387286b4defba";
export const url=new URL("../icons/suitcase-simple-thin.svg?v=da31c559018a371c8ba194ecf37a905e90e2d5512d85764dba60f4717f2c966f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
