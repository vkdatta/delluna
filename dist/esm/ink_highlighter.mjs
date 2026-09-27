export const name="ink_highlighter";
export const id="dl_17e51390ac6cfcf98670";
export const url=new URL("../icons/ink_highlighter.svg?v=170387482c10bc44380e42305fbc58984bfa4bf601cc0ca04db72b0f557dfbb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
