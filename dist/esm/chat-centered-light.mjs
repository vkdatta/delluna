export const name="chat-centered-light";
export const id="dl_2ac2b5b4ff6a485f9bce";
export const url=new URL("../icons/chat-centered-light.svg?v=b9785564970bdbd15c78551fcc72ab75fff16c546fdf8a444e35f3e4e9ab7f9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
