export const name="push-pin-simple-slash-thin";
export const id="dl_ba2c1ffd261b4d408c52";
export const url=new URL("../icons/push-pin-simple-slash-thin.svg?v=b249418f5ce6c7cda1a0f337ce95778e51e4cbdfe9af18548ca254ba5a6c9b0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
