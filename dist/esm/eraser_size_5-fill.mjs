export const name="eraser_size_5-fill";
export const id="dl_a9db440661cb3f1a906e";
export const url=new URL("../icons/eraser_size_5-fill.svg?v=0ebb880a1b933b86f5038d20525db0dc5ddbad09568eb39496aece64cddc9d07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
