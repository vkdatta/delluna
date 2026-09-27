export const name="webcam-slash-light";
export const id="dl_81987f1d38226e60efd2";
export const url=new URL("../icons/webcam-slash-light.svg?v=c834fe22b83e78b18f3b5868477533cdd0d9bb4187efc43ab46c721a13034327",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
