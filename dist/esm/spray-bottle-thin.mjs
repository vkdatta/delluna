export const name="spray-bottle-thin";
export const id="dl_e24d8695d37fd28e311b";
export const url=new URL("../icons/spray-bottle-thin.svg?v=f5544db7420e8612d18a4fa98bbb7189f462e9fbbe713c6a47209cf6d7c4a4fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
