export const name="webcam-slash-thin";
export const id="dl_15439492f74333af532b";
export const url=new URL("../icons/webcam-slash-thin.svg?v=995f27421972dcdfa164a8ace7efe52bf97f36fa65cb58eb2d9603b3ee0eaf98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
