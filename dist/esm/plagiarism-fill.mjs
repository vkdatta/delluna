export const name="plagiarism-fill";
export const id="dl_2a4a2a6449354abc8488";
export const url=new URL("../icons/P/plagiarism-fill.svg?v=2e902e5654db5fe7b0ab575862a64bb2d4d481d7c6a096162dce6c1139666fb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
