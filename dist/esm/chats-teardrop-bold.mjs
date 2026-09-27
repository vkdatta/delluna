export const name="chats-teardrop-bold";
export const id="dl_2e83d42b8f554575afa4";
export const url=new URL("../icons/chats-teardrop-bold.svg?v=395edb0bb8d9649a64ea569351056ec07e6df2ed331f29ac5b5d11273970969f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
