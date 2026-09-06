export const name="apple-podcasts-logo-fill";
export const id="dl_9bb7307b5a214db5b35e";
export const url=new URL("../icons/apple-podcasts-logo-fill.svg?v=c7a05ca1f33ef98bf4cdb8bde0c087450d6fe991769899a7ba32596aa1cae35b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
