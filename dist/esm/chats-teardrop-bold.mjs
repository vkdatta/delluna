export const name="chats-teardrop-bold";
export const id="dl_2e83d42b8f554575afa4";
export const url=new URL("../icons/chats-teardrop-bold.svg?v=66320bd0ca739e6c2fc283e07a5a99ac2be7e6e249b7e5ce5261d56e73bdb344",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
