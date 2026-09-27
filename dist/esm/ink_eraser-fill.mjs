export const name="ink_eraser-fill";
export const id="dl_2be0d18da1aad427fc0c";
export const url=new URL("../icons/ink_eraser-fill.svg?v=bab1d3a31100e34017c7215cea180aa4c75d6dd4f10750c72a2d1ccf60c8093e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
