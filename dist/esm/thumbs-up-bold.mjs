export const name="thumbs-up-bold";
export const id="dl_870dd189b9b9fd669f78";
export const url=new URL("../icons/thumbs-up-bold.svg?v=6184adf095416ac5ec66b5d07f00789d8e9def65aeefab1c859c9611c7b89251",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
