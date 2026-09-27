export const name="file-minus";
export const id="dl_4208f31987894dbc9b69";
export const url=new URL("../icons/file-minus.svg?v=c27fc89a445b28094049e28c8cd0ec041bfae408d66a5bd5af482630dc6b2a18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
