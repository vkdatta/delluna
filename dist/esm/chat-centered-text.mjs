export const name="chat-centered-text";
export const id="dl_ea753dff415042ae81c8";
export const url=new URL("../icons/chat-centered-text.svg?v=26e088481044d34e8c510e3acc098be0b9e376119fbe7f5e3115e4df2c55e9e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
