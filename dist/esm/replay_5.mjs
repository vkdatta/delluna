export const name="replay_5";
export const id="dl_9c9ea5fbdbd711aeb796";
export const url=new URL("../icons/replay_5.svg?v=5c09e8a00a76ac82ff33563567e4b116436970302aed91bb603859cd29279aa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
