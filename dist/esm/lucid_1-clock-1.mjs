export const name="lucid_1-clock-1";
export const id="dl_25228b02833f44f3bf8d";
export const url=new URL("../icons/lucid_1-clock-1.svg?v=81adb634980cc2945f9ed7b5d57dcf5a125f2aa7454c73af5892c083de6c7be1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
