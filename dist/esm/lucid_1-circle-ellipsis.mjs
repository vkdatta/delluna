export const name="lucid_1-circle-ellipsis";
export const id="dl_571c3514039442dc82f8";
export const url=new URL("../icons/lucid_1-circle-ellipsis.svg?v=b968b35a82b15f2a26a0ace22f1cd9ca3af6fd1c952a597be6cc937f19bc9f21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
