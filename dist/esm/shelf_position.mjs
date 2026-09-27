export const name="shelf_position";
export const id="dl_9cef3daa5c97badf53e7";
export const url=new URL("../icons/shelf_position.svg?v=cabd6c137f8d6a5b17cb9710a316078af9382e7a2d9f724cce38733b541eed5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
