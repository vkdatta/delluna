export const name="webcam-slash-fill";
export const id="dl_9c09b92f0b6fc95233f2";
export const url=new URL("../icons/webcam-slash-fill.svg?v=c2e8d231179e0c5b1cf8a9e23f5d69b4c31a49d28900610e932fa8e60eb6652e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
