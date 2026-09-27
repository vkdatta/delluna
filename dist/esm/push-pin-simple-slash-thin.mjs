export const name="push-pin-simple-slash-thin";
export const id="dl_ba2c1ffd261b4d408c52";
export const url=new URL("../icons/push-pin-simple-slash-thin.svg?v=c846cc62020fec37d99a9ae681e14588f87af71d4ee6b025e9b7c72a2d558951",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
