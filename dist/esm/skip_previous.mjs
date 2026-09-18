export const name="skip_previous";
export const id="dl_696d45a0f74941dead66";
export const url=new URL("../icons/skip_previous.svg?v=e8bf51bb7a94f5f27dbdcc09344e3de615f23a22d01683729f1650616f31c8e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
