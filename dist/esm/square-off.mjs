export const name="square-off";
export const id="dl_4384866b3a0242c1b6b4";
export const url=new URL("../icons/square-off.svg?v=70c285c7290a9847a94d4886669fa22024c837ce2dd391bcc926fa2d34e4f301",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
