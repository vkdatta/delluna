export const name="mouse-left-click";
export const id="dl_36adfc5458bb449b9d1a";
export const url=new URL("../icons/mouse-left-click.svg?v=e9dbf1fc9e9b0b4350312db638b844d1ac76edb2bb829b6a2d505135aafaeca3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
