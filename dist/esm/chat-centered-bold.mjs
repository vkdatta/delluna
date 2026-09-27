export const name="chat-centered-bold";
export const id="dl_ccc44ab5f2174cad8eb8";
export const url=new URL("../icons/chat-centered-bold.svg?v=e997e7aeacf71840bc9901ae1778a6a7437bcf35dd270627e5c6853cf7ce3b21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
