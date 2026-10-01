export const name="webcam-light";
export const id="dl_5b54e6f64e776f240da8";
export const url=new URL("../icons/webcam-light.svg?v=89be4d25f06c84397728c0141763ea42b81e75ed57193466e4770ea2e42e3c92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
