export const name="file-tsx-duotone";
export const id="dl_1bfd2c1e085f4c4d8eae";
export const url=new URL("../icons/file-tsx-duotone.svg?v=ef56d64cdf1782d7a2690664783f448399bc7586b123d6bb28a48ec29e4dfff9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
