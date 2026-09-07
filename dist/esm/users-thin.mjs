export const name="users-thin";
export const id="dl_7997260b7a9d4b3da7a3";
export const url=new URL("../icons/U/users-thin.svg?v=d3e549f1556bf6dba718d475fb87f62ada6c1b3e0f76426b75d903b98b904b2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
