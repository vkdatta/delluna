export const name="chat-centered-text-fill";
export const id="dl_3e0bda94f4aa48a4887a";
export const url=new URL("../icons/chat-centered-text-fill.svg?v=cc2c02e50a62aa98aae8634d518b2cc311413765ddfddae5908bf9168113d0a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
