export const name="ink_highlighter_move-fill";
export const id="dl_cfb9ef085416a980872e";
export const url=new URL("../icons/ink_highlighter_move-fill.svg?v=c177f06947e2a4bc03ddc223c16c95b61ef724229bfb7deee28bd4f0e5a63bcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
