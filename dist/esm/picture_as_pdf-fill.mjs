export const name="picture_as_pdf-fill";
export const id="dl_34c355abba3940c28aba";
export const url=new URL("../icons/P/picture_as_pdf-fill.svg?v=11c206d263e58404b36d633da25994dfaa8cb40ac6b66a0056a43f0b9109d66f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
