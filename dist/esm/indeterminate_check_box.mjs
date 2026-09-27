export const name="indeterminate_check_box";
export const id="dl_c49e64a1d5512dda2281";
export const url=new URL("../icons/indeterminate_check_box.svg?v=76bdcf246e84595d27c2246cadf243e78f7cf986c8d0ac5dba783871fe32838d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
