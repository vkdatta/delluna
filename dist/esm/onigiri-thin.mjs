export const name="onigiri-thin";
export const id="dl_310e13574f75429a8eb4";
export const url=new URL("../icons/onigiri-thin.svg?v=4c5e97ffec69c8ec6d668f2dc78fd1935ae16986b402a2e84394bf8852e16e0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
