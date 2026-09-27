export const name="fire-simple-light";
export const id="dl_bf77436b8f444bdeb553";
export const url=new URL("../icons/fire-simple-light.svg?v=133af7e8d64ea2984298867eb4708b9f24d9398b4be2d0201c746f86caf992bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
