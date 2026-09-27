export const name="arrow-square-right";
export const id="dl_eccfbdf845ac4b30a5e1";
export const url=new URL("../icons/arrow-square-right.svg?v=8a5d304ffdec9a5fb7debc1bc5cfaa94fe249afef5f5e80aec38236b3a70302d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
