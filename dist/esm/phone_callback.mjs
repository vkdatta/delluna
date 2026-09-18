export const name="phone_callback";
export const id="dl_fb09299b2a0b47568943";
export const url=new URL("../icons/P/phone_callback.svg?v=cdba98addfc3f52672fc7d988ba79108a5932e2c46576b081b1d442116376ba1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
