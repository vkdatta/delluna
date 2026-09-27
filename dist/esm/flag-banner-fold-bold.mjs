export const name="flag-banner-fold-bold";
export const id="dl_5b29bdcc9bfe4eb5a338";
export const url=new URL("../icons/flag-banner-fold-bold.svg?v=498bfd20e6120175636d07b63fd0b5ca1734d065dda8e48e71c197884a0c4cd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
