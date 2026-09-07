export const name="webcam-slash-light";
export const id="dl_0b08ac27d9a044c1ae12";
export const url=new URL("../icons/W/webcam-slash-light.svg?v=5da93fc54b5cd8e607759837dae663e40111fa824e70ed7613384a7cc026dcb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
