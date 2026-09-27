export const name="chat-centered-dots";
export const id="dl_35f6aac523fe4e66b056";
export const url=new URL("../icons/chat-centered-dots.svg?v=980704531bd1181aba1dda8c5195aeb24636fcf22c32af601abe12f8329a4c67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
