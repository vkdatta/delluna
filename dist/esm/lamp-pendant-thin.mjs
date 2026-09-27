export const name="lamp-pendant-thin";
export const id="dl_86839f598b6b4d78a52d";
export const url=new URL("../icons/lamp-pendant-thin.svg?v=12579eff927506684be61d379be9b865e05344a20368628ba079ae1d9b1c8f51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
