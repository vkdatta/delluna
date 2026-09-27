export const name="eraser-thin";
export const id="dl_061a942803fe47078461";
export const url=new URL("../icons/eraser-thin.svg?v=8c021227e5f447e4a4a03808e83f8a7a5b3e4b6b778c09edad5c54e18dbc1171",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
