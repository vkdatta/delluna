export const name="webcam-slash-thin";
export const id="dl_8b3b2376633590ab2c73";
export const url=new URL("../icons/webcam-slash-thin.svg?v=16baab742460e46b7ff44fb373465d5140bc88389f6a501c668b91c9b57960d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
