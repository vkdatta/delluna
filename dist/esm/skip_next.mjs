export const name="skip_next";
export const id="dl_472da1add504f1b79681";
export const url=new URL("../icons/skip_next.svg?v=b76102a54c83de0e52f32bdc7e75faea412f406df517b57e82480151404e7cd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
