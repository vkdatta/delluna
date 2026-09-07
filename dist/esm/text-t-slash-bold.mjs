export const name="text-t-slash-bold";
export const id="dl_9dfbc6005ad2485eabc2";
export const url=new URL("../icons/T/text-t-slash-bold.svg?v=7a800f5c6bcd81937a03ac612e1067a8723dc64e3e1280faf6b46da853787cf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
