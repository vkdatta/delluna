export const name="text_snippet-fill";
export const id="dl_7de117b68f2643cd6040";
export const url=new URL("../icons/text_snippet-fill.svg?v=17f6b0f7cb6b08b194bba72b5496d5c7255ef0312b543f5d67ac067e062fd3e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
