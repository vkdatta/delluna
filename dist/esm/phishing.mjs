export const name="phishing";
export const id="dl_e8d4cffea5b9c9b1c03c";
export const url=new URL("../icons/phishing.svg?v=fc89aee0636a406a8d0f7ffcc9191631b5a2a48feb348200f51b66f12c9324e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
