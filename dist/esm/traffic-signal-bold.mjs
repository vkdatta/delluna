export const name="traffic-signal-bold";
export const id="dl_6a72da0bd8ef94ae6974";
export const url=new URL("../icons/traffic-signal-bold.svg?v=bd5b15af1e69c4f47f36c77376ed712576b06354899136d0d9747437e8e1f39b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
