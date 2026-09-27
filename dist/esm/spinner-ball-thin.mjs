export const name="spinner-ball-thin";
export const id="dl_7ccb9fcf7887b8c9a089";
export const url=new URL("../icons/spinner-ball-thin.svg?v=922477f91ed88d69c8ff249a1503d35c0a62d2a900ec7b0b245bc7dd34dd800b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
