export const name="tile_medium";
export const id="dl_6221feee955042829581";
export const url=new URL("../icons/T/tile_medium.svg?v=284f750debc9b87ced70a5e4b5efeac05944a2f202e914d9dfaab4a4ddbeac8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
