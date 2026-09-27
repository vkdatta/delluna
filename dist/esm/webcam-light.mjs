export const name="webcam-light";
export const id="dl_a8906de84a8e97c5eed9";
export const url=new URL("../icons/webcam-light.svg?v=f94c8be53261585e50d57a264f0e9b51fab7132242718b49893efb82ded52be6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
