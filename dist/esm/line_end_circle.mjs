export const name="line_end_circle";
export const id="dl_4597c7fb67668f005b64";
export const url=new URL("../icons/line_end_circle.svg?v=3886d62f0ee484ada8ba1405b0d719d4fccf8c327c6928f24c9d5661c38d57ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
