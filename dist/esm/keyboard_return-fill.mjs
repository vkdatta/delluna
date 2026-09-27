export const name="keyboard_return-fill";
export const id="dl_b9f6a1566950b6a7e243";
export const url=new URL("../icons/keyboard_return-fill.svg?v=796af9d8b863426a86bfe8e96db3b954114c35dcf0f5f0c3b9a6cda6e96b0120",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
