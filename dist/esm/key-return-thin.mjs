export const name="key-return-thin";
export const id="dl_50176190ba0a48c3b45d";
export const url=new URL("../icons/key-return-thin.svg?v=6c7436c12ca8c3277af85931578c027bf9550a9da6066a4addd574a4c17be2fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
