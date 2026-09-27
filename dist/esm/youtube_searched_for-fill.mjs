export const name="youtube_searched_for-fill";
export const id="dl_5b45bc2e46a001f79c74";
export const url=new URL("../icons/youtube_searched_for-fill.svg?v=324fef139a3ff4140f6311bb05c0fac74c54a21fb57311f567cec6b7a8137ad6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
