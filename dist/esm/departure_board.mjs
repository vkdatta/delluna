export const name="departure_board";
export const id="dl_1d8059556f46fc7da823";
export const url=new URL("../icons/departure_board.svg?v=5a411fad1218cf9526f9f6b6f1e742c49ab1ad1c683e5eb9719afa1a3478996b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
