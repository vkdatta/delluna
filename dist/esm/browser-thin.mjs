export const name="browser-thin";
export const id="dl_fbdbd84e1f4349b081d2";
export const url=new URL("../icons/browser-thin.svg?v=e4d8512ad809fc2302ed3d2f887dc73837a15e8244112877a0ba4b24dce835e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
