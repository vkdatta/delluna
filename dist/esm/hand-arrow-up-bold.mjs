export const name="hand-arrow-up-bold";
export const id="dl_10a72ac7364441348800";
export const url=new URL("../icons/hand-arrow-up-bold.svg?v=b72318d57501ce012667b5446302bf9683afcc582255aaff77cbf3bf57f706c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
