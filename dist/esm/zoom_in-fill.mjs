export const name="zoom_in-fill";
export const id="dl_5612076a06ed33a9b2f6";
export const url=new URL("../icons/zoom_in-fill.svg?v=02aa9720f6958522bc93fa3bee01c2e2ec223bc485dd9758344a59b5f8b00ce0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
