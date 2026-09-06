export const name="drop-half-bottom";
export const id="dl_16b598fc404247009192";
export const url=new URL("../icons/drop-half-bottom.svg?v=8fdf918d9550777b94b97e4429394c97824f715dc3972f4471bfa311d8bb1d22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
