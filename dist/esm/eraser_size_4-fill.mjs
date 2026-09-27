export const name="eraser_size_4-fill";
export const id="dl_8dd3b8e3f38424aa3a49";
export const url=new URL("../icons/eraser_size_4-fill.svg?v=f34fe7029922774a476c544f6f7523e4f82b5ff33a3019089d6279624f6cd374",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
