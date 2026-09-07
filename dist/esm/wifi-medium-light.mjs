export const name="wifi-medium-light";
export const id="dl_4fc768906b50453c971c";
export const url=new URL("../icons/W/wifi-medium-light.svg?v=db40131191ee68ddd24aa05b823b7cb13946e671b22e5c0b5353d403a4845c81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
