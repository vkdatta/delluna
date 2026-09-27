export const name="lucid_2-globe";
export const id="dl_82e1157dbb0e4efe929a";
export const url=new URL("../icons/lucid_2-globe.svg?v=942d2989ccffeaa11b281021355632253a68d0aeec4686ad192b845af2ae8192",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
