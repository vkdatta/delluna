export const name="transgender-fill";
export const id="dl_8e2d75525a1d4f5094c9";
export const url=new URL("../icons/T/transgender-fill.svg?v=911ad2fb808ecdc3c3f481d2e3c634dc862165875b02491fb4085f638953300c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
