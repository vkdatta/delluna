export const name="cursor";
export const id="dl_0f1a34cc37da446cb6cb";
export const url=new URL("../icons/cursor.svg?v=67df1a1f6d7868c4eed4705775cafd972c19a3ff25f99b1b260b525b7c85d1e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
