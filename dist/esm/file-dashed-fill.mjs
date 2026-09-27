export const name="file-dashed-fill";
export const id="dl_952aa2d89d714442a474";
export const url=new URL("../icons/file-dashed-fill.svg?v=b6a36416c65bd80ceac91b8f21600b703781f71c1a890e7d5cbb4bbf4a0517fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
