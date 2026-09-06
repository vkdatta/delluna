export const name="mouse-middle-click-fill";
export const id="dl_82a58cd4d13d4e8198ae";
export const url=new URL("../icons/mouse-middle-click-fill.svg?v=77757f7e55a8666adf3566d8bae401e2fd0548c05d6402a06f11bc1898e5baee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
