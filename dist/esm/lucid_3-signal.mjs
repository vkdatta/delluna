export const name="lucid_3-signal";
export const id="dl_cc91d2f3f6ca4e4c8f51";
export const url=new URL("../icons/lucid_3-signal.svg?v=2bd409431b9bb2b14126a0c6539217441c1d8bf6680518176cc1d85027947137",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
