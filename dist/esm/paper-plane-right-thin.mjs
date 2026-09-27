export const name="paper-plane-right-thin";
export const id="dl_897696c029c3477ab2cc";
export const url=new URL("../icons/paper-plane-right-thin.svg?v=3614d1b8e25b9b9717229ca2557f27c530c91c3b1c5abdcd6e1344dd8950a3a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
