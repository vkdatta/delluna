export const name="chess_king_2-fill";
export const id="dl_ab0994323d504dacb0ee";
export const url=new URL("../icons/C/chess_king_2-fill.svg?v=4d14f719d14535c420077c1d93a96fca34f53171bdeaa63ffb2ba9dcbd5a98ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
