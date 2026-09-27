export const name="sidebar-simple-thin";
export const id="dl_111dfa30b97f10436a7c";
export const url=new URL("../icons/sidebar-simple-thin.svg?v=13be88fbc4d0b76b2fc753e875a58f41c6fa7a17c06733c86ee9acf9297619ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
