export const name="hourglass-simple-medium";
export const id="dl_48ac093d32564530b0d3";
export const url=new URL("../icons/hourglass-simple-medium.svg?v=60ae0412c0725ff5ab85662000128acd3884b129fb18dc99bd1e54193c68e837",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
