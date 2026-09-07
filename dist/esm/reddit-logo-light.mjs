export const name="reddit-logo-light";
export const id="dl_4b04385980bd45908a0b";
export const url=new URL("../icons/reddit-logo-light.svg?v=e7a4800c93c827bdcc8a031901a7967913ed5050e066c582a30a6aa8b165cc10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
