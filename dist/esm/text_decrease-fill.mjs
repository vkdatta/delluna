export const name="text_decrease-fill";
export const id="dl_0ae41a70b0f849b769fd";
export const url=new URL("../icons/text_decrease-fill.svg?v=0f612e89328cef931ed8c7405ff92e85fa9ed0aebf3f78e9de4edf8d2a81adfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
