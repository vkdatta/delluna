export const name="tree";
export const id="dl_c465416a13c9cb857e0d";
export const url=new URL("../icons/tree.svg?v=983d1992f64e9ed07326c6670d7024a5bdf89b57b6b32dd02fceeac8ad6cc755",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
