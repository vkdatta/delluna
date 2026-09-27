export const name="strategy-thin";
export const id="dl_62546bed305f18a6bcd8";
export const url=new URL("../icons/strategy-thin.svg?v=ce7d707a3e0f2b88ff343c2fb2d13ad60363e47579cf4ffa825cd0684c0dfa65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
