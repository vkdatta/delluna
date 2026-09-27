export const name="live_tv-fill";
export const id="dl_996aae6f3405a27a7822";
export const url=new URL("../icons/live_tv-fill.svg?v=e163b8e9845ee0ccd0e6ea8ae548b6389162f4362da5cd18e48e9f4d962dab04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
