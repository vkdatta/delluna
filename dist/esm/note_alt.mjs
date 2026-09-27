export const name="note_alt";
export const id="dl_5b37e4701daa426b5ca1";
export const url=new URL("../icons/note_alt.svg?v=7da750612ad221b98cef98018a31d55e93dc7979fa9c2f2606730a9eb8639cb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
