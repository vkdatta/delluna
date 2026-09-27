export const name="pencil-simple-bold";
export const id="dl_e4fb47f199d34553ab24";
export const url=new URL("../icons/pencil-simple-bold.svg?v=a4deb000abe850aad22dc36e423646b6fc9de0da36d07c19d52d141faf7ff07b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
