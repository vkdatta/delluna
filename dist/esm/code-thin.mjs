export const name="code-thin";
export const id="dl_34b23232687b42079dc0";
export const url=new URL("../icons/code-thin.svg?v=99f268237f80d418ee8ae01b22e43dca05317d52a7228a74b795ec3d31104b6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
