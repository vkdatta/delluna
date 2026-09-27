export const name="remove_road-fill";
export const id="dl_c75691382ce08a02952d";
export const url=new URL("../icons/remove_road-fill.svg?v=b2fc91a140d4daac4ce27b76e72b94fb4a5da75f9c5b2e34df3f3a41b334922b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
