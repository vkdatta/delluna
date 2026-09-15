export const name="chat_bubble_off";
export const id="dl_883532f874cc4bb2a81c";
export const url=new URL("../icons/C/chat_bubble_off.svg?v=5a06f01b51ff80afc055eb405c1334a36a92f317fc4c1807aaf6e16985552485",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
