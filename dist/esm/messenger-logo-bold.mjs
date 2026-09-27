export const name="messenger-logo-bold";
export const id="dl_c22ec784c35043e5a371";
export const url=new URL("../icons/messenger-logo-bold.svg?v=bad43937bb6d63b7561f2767ce4c046c7bcfa0d52410acfb0e60f06a84b555ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
