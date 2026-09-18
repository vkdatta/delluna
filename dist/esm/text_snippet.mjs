export const name="text_snippet";
export const id="dl_c52a5c058dcc4c378768";
export const url=new URL("../icons/text_snippet.svg?v=e1ba5dcbc2fee21434a6f32ff783cd2c651889feab36a52412c5539475725127",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
