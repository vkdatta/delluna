export const name="arrow-fat-lines-up-fill";
export const id="dl_b4c84b335e8f4b4fac95";
export const url=new URL("../icons/arrow-fat-lines-up-fill.svg?v=a2bdd45c315f69fa7902e219cd528da3b831b60a03ef17e1f63d05546a429c6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
