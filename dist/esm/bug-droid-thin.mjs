export const name="bug-droid-thin";
export const id="dl_91be3e5b29704d569148";
export const url=new URL("../icons/bug-droid-thin.svg?v=eca7fd2012596a211cc56d9eff953dffd8a87110cfded45c4f82174025723665",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
