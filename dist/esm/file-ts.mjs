export const name="file-ts";
export const id="dl_7831bfae50d4402fb9a9";
export const url=new URL("../icons/file-ts.svg?v=a84ec4817f1a2dc91f2243962f5d653f5348bf5bd6aa6f7f277dd5e7ec76f71e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
