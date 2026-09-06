export const name="dropbox-logo-bold";
export const id="dl_f3b268d6562c4ea18b5d";
export const url=new URL("../icons/dropbox-logo-bold.svg?v=d34f627cc18d835030efae285c5bd85d4a85ae9465c31ca4ac25b4852055dc98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
