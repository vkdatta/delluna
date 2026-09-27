export const name="fiber_new";
export const id="dl_b879f1171ed41e3d761e";
export const url=new URL("../icons/fiber_new.svg?v=78ab0a561ada51ff3fcd48333de33734299b42d12b695e0cba563e66b1aaac30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
