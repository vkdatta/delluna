export const name="ios-fill";
export const id="dl_4f1826533704764bfece";
export const url=new URL("../icons/ios-fill.svg?v=847cdd471b5d3450a3c62165ff840e83460bdab7f67d339a786e64916b747d20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
