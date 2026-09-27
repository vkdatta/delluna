export const name="chat_paste_go_2";
export const id="dl_15d7bfea13304b5ceae0";
export const url=new URL("../icons/chat_paste_go_2.svg?v=25921da3e3791c4a65454b45fd2d9ee75fd91b4a4989eba7212da21ed245de8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
