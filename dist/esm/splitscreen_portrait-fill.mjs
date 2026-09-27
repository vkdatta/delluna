export const name="splitscreen_portrait-fill";
export const id="dl_1fe90c152c08791b8805";
export const url=new URL("../icons/splitscreen_portrait-fill.svg?v=4e1fc7449a573261d94e46783fd5fe6434dea22116952967dfbbcaa6cc7568d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
