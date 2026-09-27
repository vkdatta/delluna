export const name="format_h3-fill";
export const id="dl_4e1fde0dd41b3068d0ae";
export const url=new URL("../icons/format_h3-fill.svg?v=5f62982f1ac65c1c484ce9f540b38bf180178d11dcc2b057074a35d13660b08b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
