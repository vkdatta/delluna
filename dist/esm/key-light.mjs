export const name="key-light";
export const id="dl_19c6e2758d41471ebac8";
export const url=new URL("../icons/key-light.svg?v=d752bfc9c3c7b698fcb6f36262af15e283a9a6b3cdaf456239a898254e413b2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
