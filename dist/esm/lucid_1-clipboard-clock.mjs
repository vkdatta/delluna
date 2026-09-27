export const name="lucid_1-clipboard-clock";
export const id="dl_b8a797664f264606981f";
export const url=new URL("../icons/lucid_1-clipboard-clock.svg?v=95707578715ba948738b1ed8d0b4e309ec633fff1c3d4624e744b5b6037fbbc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
