export const name="chat-slash";
export const id="dl_b9af0bec718143229fc7";
export const url=new URL("../icons/chat-slash.svg?v=853afe0f611fff495f8c61cfee34588c6abe5b2bb6fc2f860119b8b822812113",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
