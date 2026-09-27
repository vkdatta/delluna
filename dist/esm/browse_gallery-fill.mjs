export const name="browse_gallery-fill";
export const id="dl_7565ba6a48673a92bf60";
export const url=new URL("../icons/browse_gallery-fill.svg?v=7ea14cd6a50126486f940941db449b42a1988609d98bfedf8abe78cc97a6ea61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
