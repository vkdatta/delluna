export const name="content_paste_go";
export const id="dl_75d4b570053b3996084b";
export const url=new URL("../icons/content_paste_go.svg?v=2fa0bb5d7f5231f7b9895fcdb2a5c41132c76f26f9c0393a1a93e17c21ba0c70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
