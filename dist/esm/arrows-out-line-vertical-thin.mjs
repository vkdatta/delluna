export const name="arrows-out-line-vertical-thin";
export const id="dl_36ecf8a520b64dd38a0a";
export const url=new URL("../icons/arrows-out-line-vertical-thin.svg?v=ac2c8e9be62ab587924122028f51302d5e918b0cb4cd6d5fa39ebb31b965ac5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
