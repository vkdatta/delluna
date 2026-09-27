export const name="html";
export const id="dl_532952e79cc87a4b5c8d";
export const url=new URL("../icons/html.svg?v=bebf72ec38ef001c393f7da3a492869af43b5a3f9a957da814e9b7b518dfafe3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
