export const name="film-strip-thin";
export const id="dl_be8a678baa1842dda711";
export const url=new URL("../icons/film-strip-thin.svg?v=f80c9b96faf11540f83b2e485311dfa4e8e1f99822dba57f9ced5dbaf14beb2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
