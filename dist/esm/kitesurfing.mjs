export const name="kitesurfing";
export const id="dl_bd9ec5237bac2ccb72e6";
export const url=new URL("../icons/kitesurfing.svg?v=f6dc595c85465ef15f0668dd89151b30369fde39ed86bf626a305823832f0c0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
