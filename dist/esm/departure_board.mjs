export const name="departure_board";
export const id="dl_a0e64a9cd9c967c0314b";
export const url=new URL("../icons/departure_board.svg?v=853da7634d7ce2d8bdc0a6ef668556af786aa858cf108c546409da2bd358fb7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
