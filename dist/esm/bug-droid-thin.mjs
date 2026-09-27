export const name="bug-droid-thin";
export const id="dl_91be3e5b29704d569148";
export const url=new URL("../icons/bug-droid-thin.svg?v=b5133afe2f46dd795566d19312f9430c66952ed38f444a3e27cc69e0fbaaf45c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
