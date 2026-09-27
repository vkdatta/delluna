export const name="lucid_3-message-square";
export const id="dl_4a5e4317264148b5b9aa";
export const url=new URL("../icons/lucid_3-message-square.svg?v=8c4fdac44d95bf9dc240189303913fc26876d05ba090bd940980e8159e9458e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
