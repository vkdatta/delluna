export const name="camera-plus-fill";
export const id="dl_8fa772e63b894da79b8b";
export const url=new URL("../icons/camera-plus-fill.svg?v=3c1b335f3237c7d07798237687bacc9b9befd06eb0672998aad85691e40fc838",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
