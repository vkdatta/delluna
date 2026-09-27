export const name="hand-fist-light";
export const id="dl_4fd89d42e70d45d98c6a";
export const url=new URL("../icons/hand-fist-light.svg?v=7d03a5b1faa5bfa2d8d0ca550cdd2b461fe0a460141ddb5d77b72e4ee69a8124",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
