export const name="chat_error-fill";
export const id="dl_ff1f939fa83cb8acbd73";
export const url=new URL("../icons/chat_error-fill.svg?v=9ed3a194e6856033184e6664983f784a4029f4fcc2c2bc09461784d408a49b03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
