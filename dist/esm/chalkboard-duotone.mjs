export const name="chalkboard-duotone";
export const id="dl_ee36ceda7f324ac2ab26";
export const url=new URL("../icons/chalkboard-duotone.svg?v=edaa6e00a8b1ce3e4dfa087b4295ed547e22558d9fc305c952d9d90b95670fd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
