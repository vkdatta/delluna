export const name="camera-thin";
export const id="dl_27cc54686d0244498989";
export const url=new URL("../icons/camera-thin.svg?v=820249164f043e6aeb8045c4e5862c673abe360ac82b7cd5b7efd64b2eb599b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
