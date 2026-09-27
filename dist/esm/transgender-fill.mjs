export const name="transgender-fill";
export const id="dl_031f4d73abdaaa698bcb";
export const url=new URL("../icons/transgender-fill.svg?v=78db02e4c8ace81b4c5988598e9fbeadebaa828a2cbba99f7988ddcca3e0523d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
